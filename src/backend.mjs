// Deniz Ozer C1

import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');


export async function addOffre(house) {
    try {
        await pb.collection('maison').create(house);
        return { success: true, message: 'Offre ajoutée avec succès' };
    } catch (error) {
        console.error('Erreur lors de lajout de la maison:', error);
        return { success: false, message: 'Une erreur est survenue en ajoutant la maison' };
    }
}


export async function filterByPrix(prixMin, prixMax) {
    try {
        if (prixMin <= 0 || prixMax <= 0 || prixMax < prixMin) {
            throw new Error('Valeurs invalides pour le filtrage du prix.');
        }

        let data = await pb.collection('maison').getFullList({
            sort: '-created',
            filter: `prix >= ${prixMin} && prix <= ${prixMax}`
        });

        return data.map((maison) => ({
            ...maison,
            imageUrl: pb.files.getURL(maison, maison.image)
        }));
    } catch (error) {
        console.error('Erreur lors du filtrage des maisons:', error);
        return [];
    }
}



/* export const events = await pb.collection("events").getFullList

 try {
    const records = await pb.collection('maison').getFullList();
    console.tale(records);
} catch (e) {
    console.error(e);
}

 try {
    const Onerecord = await pb.collection('maison').getOne('2gyp266kkvc607o');
    console.table(Onerecord);
} catch (e) {
    console.error(e);
}

try {
    const maisonsCroissantDate = await pb.collection('maison').getFullList({
        sort: 'created'
    });
    console.table(maisonsCroissantDate);
} catch (e) {
    console.error(e);
}

try {
    const maisonsDecroissantDate = await pb.collection('maison').getFullList({
        sort: '-created'
    });
    console.table(maisonsDecroissantDate);
} catch (e) {
    console.error(e);
}

try {
    const maisonsFavoris = await pb.collection('maison').getFullList({
        filter: 'favori = true'
    });
    console.table(maisonsFavoris);
} catch (e) {
    console.error(e);
}

try {
    const maisonsSuperficie100 = await pb.collection('maison').getFullList({
        filter: 'superficie > 100'
    });
    console.table(maisonsSuperficie100);
} catch (e) {
    console.error(e);
}

try {
    const maisonsSuperficieEtSalles = await pb.collection('maison').getFullList({
        filter: 'superficie > 100 && salles_de_bain >= 2'
    });
    console.table(maisonsSuperficieEtSalles);
} catch (e) {
    console.error(e);
}

try {
    const maisonsSuperficieOuChambres = await pb.collection('maison').getFullList({
        filter: 'superficie > 100 || chambres >= 3'
    });
    console.table(maisonsSuperficieOuChambres);
} catch (e) {
    console.error(e);
}

try {
    const maisonsParPrix = await pb.collection('maison').getFullList({
        filter: 'superficie > 100',
        sort: 'prix'
    });
    console.table(maisonsParPrix);
} catch (e) {
    console.error(e);
}

try {
    const maisonsParNom = await pb.collection('maison').getFullList({
        sort: 'nom'
    });
    console.table(maisonsParNom);
} catch (e) {
    console.error(e);
}

try {
    const nomCherche = 'Maison Exemple';
    const maisonParNom = await pb.collection('maison').getFullList({
        filter: `nom = "${nomCherche}"`
    });
    console.table(maisonParNom);
} catch (e) {
    console.error(e);
}

try {
    const nomExclu = 'Maison Exclue';
    const maisonsSansNom = await pb.collection('maison').getFullList({
        filter: `nom != "${nomExclu}"`,
        sort: 'nom'
    });
    console.table(maisonsSansNom);
} catch (e) {
    console.error(e);
} */






