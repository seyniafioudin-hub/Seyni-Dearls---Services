// ====================== DONNÉES PRODUITS ======================
const produits = [
    {
        id: 1,
        nom: "style tendance",
        prix: "19,99 €",
        ancienPrix: "100,300 €",
        categorie: "vetements",
        image: "veste.jpg",
        desc: "Confort et style pour les journées ensoleillées"
    },
    {
        id: 2,
        nom: "Robe élégante femme",
        prix: "39,99 €",
        ancienPrix: "59,99 €",
        categorie: "vetements",
        image:"robe.jpg",
        desc: "Confort et style pour les journées ensoleillées"
    },
    {
        id: 3,
        nom: "Pull chaud tendance",
        prix: "24,99 €",
        ancienPrix: "34,99 €",
        categorie: "vetements",
        image:"pulls.jpg",
        desc: "Pull confortable pour toutes saisons"
    },
    {
        id: 4,
        nom: "Robe fluide été",
        prix: "44,99 €",
        ancienPrix: "64,99 €",
        categorie: "vetements",
        image:"robe.jpg",
        desc: "Robe fluide et élégante pour toutes occasions"
    },
    {
        id: 5,
        nom: "Chaussures casual",
        prix: "34,99 €",
        ancienPrix: "49,99 €",
        categorie: "vetements",
        image:"shoes.jpg",
        desc: "Chaussures tendance et confortables pour tous les jours"
    },
    {
        id: 6,
        nom: "shoe",
        prix: "49,99 €",
        ancienPrix: "69,99 €",
        categorie: "vetements",
        image:"shoe.jpg",
        desc: "Chaussures tendance et confortables pour tous les jours"
    },
    {
        id: 7,
        nom: "Sac à main femme grand volume",
        prix: "29,99 €",
        ancienPrix: "39,99 €",
        categorie: "accessoires",
        image: "sac.webp",
        desc: "Sac tendance et résistant au quotidien"
    },
    {
        id: 8,
        nom: "Chaîne argent élégante",
        prix: "14,99 €",
        ancienPrix: "24,99 €",
        categorie: "accessoires",
        image:"chaine.jpg",
        desc: "Chaîne en argent élégante pour toutes occasions"
    }, 
    {
        id: 9,
        nom: "Casque audio bluetooth",
        prix: "59,99 €",
        ancienPrix: "79,99 €",
        categorie: "electronique",
        image:"casque.jpg",
        desc: "Casque audio bluetooth avec son de qualité"
    }, 
    {
        id: 10,
        nom: "T-shirt merch groupe",
        prix: "19,99 €",
        ancienPrix: "29,99 €",
        categorie: "vetements",
        image:"t-shirt.jpg",
        desc: "T-shirt officiel de votre groupe préféré"
    },
    {
        id: 11,
        nom: "Montre connectée sport",
        prix: "89,99 €",
        ancienPrix: "119,99 €",
        categorie: "electronique",
        image: "montre.jpg",
        desc: "Suivi activité et notifications"
    },
    {
        id: 12,
        nom: "Clavier mécanique gamer",
        prix: "49,99 €",
        ancienPrix: "69,99 €",
        categorie: "electronique",
        image:"clavier.jpg",
        desc: "Clavier mécanique rétroéclairé"
    },
    {
        id: 13,
        nom: "Écran 24 pouces Full HD",
        prix: "129,99 €",
        ancienPrix: "159,99 €",
        categorie: "electronique",
        image:"Ecran.jpg",
        desc: "Écran pour travail et divertissement"
    },
    {
        id: 14,
        nom: "Lunettes de soleil protection UV haute",
        prix: "24,99 €",
        ancienPrix: "34,99 €",
        categorie: "accessoires",
        image: "lunette.jpg",
        desc: "Style moderne + protection totale UV"
    },
    {
        id: 15,
        nom: "Robe de soirée élégante",
        prix: "14,99 €",
        ancienPrix: "19,99 €",
        categorie: "vetements",
        image: "Robes.jpg",
        desc: "Léger et respirant pour sport et loisirs"
    },
    {
        id: 16,
        nom: "Écouteurs sans fil bluetooth haute qualité",
        prix: "49,99 €",
        ancienPrix: "69,99 €",
        categorie: "electronique",
        image: "ecouter.jpg",
        desc: "Son clair, autonomie longue durée"
    },
    {
        id: 17,
        nom: "polo",
        prix: "19,99 €",
        ancienPrix: "29,99 €",
        categorie: "vetements",
        image: "polo.jpg",
        desc: "Polo élégant pour toutes les occasions"
    },  
    {
        id: 18,
        nom: "smartphone",
        prix: "3700,00 €",
        ancienPrix: "4300,59 €",
        categorie: "electronique",
        image: "smartphone.webp",
        desc: "Smartphone haut de gamme avec camera de qualité"
    },
    {
        id: 19,
        nom: "bonnet",
        prix: "29,99 €",
        ancienPrix: "40,99 €",
        categorie: "vetements",
        image: "bonnet.jpg",
        desc: "Bonnet chaud pour les jours froids"
    },
    {
        id: 20,
        nom: "souris gamer",
        prix: "59,00 €",
        ancienPrix: "99,87 €",
        categorie: "accessoires",
        image: "souris.jpg",
        desc: "Souris gaming ergonomique avec capteur de haute qualité"
    },
    {
        id: 21,
        nom: "jasket en jean",
        prix: "78,98€",
        ancienPrix: "199,99€",
        categorie: "vetements",
        image: "jacket.jpg",
        desc: "pour lhiver et les journées fraîches, style intemporel"
    },
    {
        id: 22,
        nom: "djodjine",
        prix: "55,99 €",
        ancienPrix: "123,99 €",
        categorie: "vetements",
        image: "djodjine.jpg",
        desc: "pour les journées ensoleillées"
    },
    {
        id: 23,
        nom: "bracelet en cuir",
        prix: "29,99 €",
        ancienPrix: "40,99 €",
        categorie: "vetements",
        image: "bracelet.jpg",
        desc: "Bracelet en cuir naturel"
    },
    {
        id: 24,
        nom: "perruque fashion",
        prix: "59,99 €",
        ancienPrix: "79,99 €",
        categorie: "accessoires",
        image: "merche.jpg",
        desc: "Perruque de style fashion pour un look décontracté"
    },
    {
        id: 25,
        nom: "oppo",
        prix: "3700,00 €",
        ancienPrix: "4300,59 €",
        categorie: "electronique",
        image: "oppo.jpg",
        desc: "Smartphone haut de gamme avec camera de qualité"
    },
    {
        id: 26,
        nom: "parfum",
        prix: "29,99 €",
        ancienPrix: "39,99 €",
        categorie: "accessoires",
        image: "parfums.jpg",
        desc: "Parfum de qualité supérieure pour un parfum durable"
    },
    {
        id: 27,
        nom: "parapluie",
        prix: "30,99 €",
        ancienPrix: "40,99 €",
        categorie: "accessoires",
        image: "parapluie.jpg",
        desc: "Parapluie pratique pour les jours de pluie"
    },
    {
        id: 28,
        nom: "louis vuitton",
        prix: "1000,00 €",
        ancienPrix: "1500,00 €",
        categorie: "accessoires",
        image: "louis vuitton.jpg",
        desc: "Sac à main emblématique de la marque"
    },
    {
        id: 29,
        nom: "crossbody bag",
        prix: "59,99 €",
        ancienPrix: "89,99 €",
        categorie: "accessoires",
        image: "crossbody.jpg",
        desc: "crossbody bag tendance pour un look décontracté et pratique"
    },
    {
        id: 30,
        nom: "gourde",
        prix: "199,99 €",
        ancienPrix: "299,99 €",
        categorie: "accessoires",
        image: "gourde.jpg",
        desc: "Gourde tendance pour un look décontracté et pratique"
    },
    {
        id: 31,
        nom: "laptop",
        prix: "1500,00 €",
        ancienPrix: "2000,00 €",
        categorie: "electronique",
        image: "laptop.jpg",
        desc: "Laptop puissant pour le travail et le divertissement"
    },
    {
        id: 32,
        nom: "shoewoman",
        prix: "59,99 €",
        ancienPrix: "79,99 €",
        categorie: "accessoires",
        image: "shoewoman.jpg",
        desc: "Caméra de sécurité intelligente pour la surveillance à domicile"
    },
    {
        id: 33,
        nom:"handbag",
        prix: "89,99 €",
        ancienPrix: "129,99 €",
        categorie: "accessoires",
        image: "handbag.jpg",
        desc: "Sac à main tendance et pratique pour transporter vos affaires avec style"
    },
    {
        id: 34,
        nom:"bag for school",
        prix: "49,99 €",
        ancienPrix: "69,99 €",
        categorie: "accessoires",
        image: "bag.jpg",
        desc: "Sac à dos pour school tendance et pratique pour transporter vos affaires scolaires avec style"
    },
    {
        id: 35,
        nom:"luxe",
        prix: "800,99 €",
        ancienPrix: "1099 €",
        categorie: "accessoires",
        image: "luxe.jpg",
        desc: "rose luxe pour un look élégant et sophistiqué"
    }
];

// ====================== VARIABLES GLOBALES + LOCALSTORAGE ======================
let panier = JSON.parse(localStorage.getItem("panier")) || [];
// Normaliser les favoris : stocker uniquement les IDs (supporte ancien format objets)
const _favRaw = JSON.parse(localStorage.getItem("favoris")) || [];
let favoris = Array.isArray(_favRaw) ? _favRaw.map(f => (typeof f === 'object' && f !== null && 'id' in f) ? f.id : f).filter(v => v !== undefined && v !== null) : [];
let commandes = JSON.parse(localStorage.getItem("commandes")) || [];
let utilisateurConnecte = JSON.parse(localStorage.getItem("utilisateur")) || null;

// Pile simple pour historique de navigation (pour bouton Retour)
let navigationStack = [];

// Variables de pagination
let currentPage = 1;
const productsPerPage = 6;
let lastFilteredList = [];

function getCurrentScreenNum(){
    const active = document.querySelector('.screen.active');
    if(!active || !active.id) return 1;
    const m = active.id.match(/screen(\d+)/);
    return m ? parseInt(m[1], 10) : 1;
}

// Sauvegarder dans localStorage
function sauvegarderLocalStorage(){
    localStorage.setItem("panier", JSON.stringify(panier));
    localStorage.setItem("favoris", JSON.stringify(favoris));
    localStorage.setItem("commandes", JSON.stringify(commandes));
    localStorage.setItem("utilisateur", JSON.stringify(utilisateurConnecte));
}

// Convertir prix string → nombre
function getPrixNum(textePrix){
    return parseFloat(textePrix.replace(",",".").replace(" €",""));
}

// Afficher message toast
function showToast(texte) {
    const toast = document.getElementById("toast");
    toast.textContent = texte;
    toast.style.display = "block";
    setTimeout(()=> toast.style.display = "none", 2500);
}

// ====================== AFFICHAGE PRODUITS ======================
function afficherProduits(liste, conteneurId = "products") {
    const conteneur = document.getElementById(conteneurId);
    conteneur.innerHTML = "";

    if(liste.length === 0){
        conteneur.innerHTML = "<p style='text-align:center;padding:20px;color:#999;'>Aucun produit</p>";
        updatePaginationUI(0);
        return;
    }

    // Mémoriser la liste filtrée et réinitialiser la pagination
    lastFilteredList = liste;
    currentPage = 1;

    // Afficher la page courante
    displayCurrentPage(conteneurId);
}

function displayCurrentPage(conteneurId = "products") {
    const conteneur = document.getElementById(conteneurId);
    conteneur.innerHTML = "";

    if(lastFilteredList.length === 0) {
        conteneur.innerHTML = "<p style='text-align:center;padding:20px;color:#999;'>Aucun produit</p>";
        updatePaginationUI(0);
        return;
    }

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const pageProducts = lastFilteredList.slice(start, end);

    pageProducts.forEach(prod => {
        const carte = document.createElement("div");
        carte.className = "product-card-tao";

        carte.innerHTML = `
            <img src="${prod.image}" alt="${prod.nom}" class="prod-img">
            <div class="prod-info">
                <span class="prod-tag">PROMO</span>
                <h3 class="prod-name">${prod.nom}</h3>
                <p class="prod-desc">${prod.desc}</p>
                <div class="prod-prix">
                    <span class="prix-actuel">${prod.prix}</span>
                    <span class="prix-ancien">${prod.ancienPrix}</span>
                </div>
                <div class="prod-actions">
                    <button class="btn-fav" onclick="toggleFavoris(${prod.id})" title="Ajouter aux favoris">
                        <i class="${favoris.includes(prod.id) ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                    <button class="btn-panier" onclick="ajouterAuPanier(${prod.id})">
                        <i class="fas fa-shopping-cart"></i> Ajouter
                    </button>
                </div>
            </div>
        `;
        conteneur.appendChild(carte);
    });

    updatePaginationUI(lastFilteredList.length);
}

function updatePaginationUI(totalProducts) {
    const pageIndicator = document.getElementById('pageIndicator');
    const paginationContainer = document.getElementById('paginationContainer');
    const prevBtn = paginationContainer?.querySelector('button:nth-child(1)');
    const nextBtn = paginationContainer?.querySelector('button:nth-child(3)');

    if(!pageIndicator) return;

    const totalPages = Math.ceil(totalProducts / productsPerPage) || 1;
    pageIndicator.textContent = `Page ${currentPage} / ${totalPages}`;

    if(prevBtn) prevBtn.style.opacity = currentPage === 1 ? '0.5' : '1';
    if(nextBtn) nextBtn.style.opacity = currentPage >= totalPages ? '0.5' : '1';
}

function nextPage() {
    const totalPages = Math.ceil(lastFilteredList.length / productsPerPage);
    if(currentPage < totalPages) {
        currentPage++;
        displayCurrentPage('products');
        window.scrollTo(0, 0);
    }
}

function previousPage() {
    if(currentPage > 1) {
        currentPage--;
        displayCurrentPage('products');
        window.scrollTo(0, 0);
    }
}



function toggleFavoris(id) {
    const pos = favoris.indexOf(id);
    if(pos > -1) favoris.splice(pos, 1);
    else favoris.push(id);
    sauvegarderLocalStorage();
    afficherProduits(produits);
}

function ajouterAuPanier(id) {
    const produit = produits.find(p => p.id === id);
    if(!produit) return;
    panier.push(produit);
    sauvegarderLocalStorage();
    updateCartBadge();
    afficherPanier();
    openCartSidebar();
    showToast(`${produit.nom} ajouté au panier !`);
}

function goToScreen(num, replace = false) {
    // gérer pile historique
    const current = getCurrentScreenNum();
    if(!replace && current && current !== num) {
        navigationStack.push(current);
    }

    // si on va à l'accueil, vider l'historique
    if(num === 1) navigationStack = [];

    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    const target = document.getElementById('screen' + num);
    if(target) target.classList.add('active');
    updateBottomNav(num);
    updateBackBtnVisibility();
}

function goBack(){
    const btn = document.getElementById('backBtn');
    if(navigationStack.length === 0){
        // pas d'historique: retourner à l'accueil
        goToScreen(1);
        return;
    }
    const prev = navigationStack.pop();
    goToScreen(prev, true);
}

function updateBackBtnVisibility(){
    const btn = document.getElementById('backBtn');
    if(!btn) return;
    btn.style.display = navigationStack.length > 0 ? 'block' : 'none';
}

function updateBottomNav(num) {
    const map = {
        1: 0,
        2: 1,
        10: 2,
        11: 3,
        12: 4
    };
    const items = document.querySelectorAll('.bottom-nav .nav-item');
    items.forEach((item, index) => {
        item.classList.toggle('active', index === map[num]);
    });
}

// ====================== GESTION PANIER SIDEBAR ======================
function openCartSidebar() {
    const overlay = document.getElementById('cartSidebarOverlay');
    if(overlay) overlay.style.display = 'flex';
}

function closeCartSidebar() {
    const overlay = document.getElementById('cartSidebarOverlay');
    if(overlay) overlay.style.display = 'none';
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if(badge) badge.textContent = panier.length;
}

function afficherPanier() {
    const cartList = document.getElementById('cartItemsList');
    const cartTotal = document.getElementById('cartTotalPrice');
    
    if(!cartList) return;
    
    cartList.innerHTML = '';
    let total = 0;

    if(panier.length === 0) {
        cartList.innerHTML = '<p style="text-align:center;padding:20px;color:#999;">Votre panier est vide</p>';
        if(cartTotal) cartTotal.textContent = '0 €';
        return;
    }

    panier.forEach((prod, index) => {
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        
        const prix = getPrixNum(prod.prix);
        total += prix;

        row.innerHTML = `
            <div class="cart-item-name">${prod.nom}</div>
            <div style="color: var(--main-red); font-weight: bold;">${prod.prix}</div>
            <button class="cart-delete" onclick="supprimerDuPanier(${index})">✕</button>
        `;
        cartList.appendChild(row);
    });

    if(cartTotal) cartTotal.textContent = total.toFixed(2) + ' €';
}

function supprimerDuPanier(index) {
    panier.splice(index, 1);
    sauvegarderLocalStorage();
    updateCartBadge();
    afficherPanier();
    showToast('Produit supprimé du panier');
}

function viderPanier() {
    if(!confirm('Vider tout le panier ?')) return;
    panier = [];
    sauvegarderLocalStorage();
    updateCartBadge();
    afficherPanier();
    showToast('Panier vidé');
}

// ====================== FILTRAGE ET RECHERCHE ======================
function applyFilters() {
    const searchText = document.getElementById('search-input')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('catFilter')?.value || '';
    const priceSort = document.getElementById('priceSort')?.value || '';

    let filtered = produits.filter(p => {
        const matchSearch = p.nom.toLowerCase().includes(searchText) || p.desc.toLowerCase().includes(searchText);
        const matchCategory = !categoryFilter || p.categorie === categoryFilter;
        return matchSearch && matchCategory;
    });

    if(priceSort === 'asc') {
        filtered.sort((a, b) => getPrixNum(a.prix) - getPrixNum(b.prix));
    } else if(priceSort === 'desc') {
        filtered.sort((a, b) => getPrixNum(b.prix) - getPrixNum(a.prix));
    }

    afficherProduits(filtered);
}

function filterByCategory(cat) {
    const catFilter = document.getElementById('catFilter');
    if(catFilter) catFilter.value = cat;

    // Afficher UNiquement la catégorie sélectionnée
    if(!cat) {
        afficherProduits(produits);
        return;
    }

    const filtered = produits.filter(p => p.categorie === cat);
    afficherProduits(filtered);
}

// ====================== FAVORIS ======================
function afficherFavoris() {
    const favList = document.getElementById('fav-list');
    if(!favList) return;

    const produitsFav = produits.filter(p => favoris.includes(p.id));
    afficherProduits(produitsFav, 'fav-list');
}

// ====================== AUTHENTIFICATION ======================
function switchForm(type) {
    if(type === 'login') {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('tabLogin').classList.add('active');
        document.getElementById('tabRegister').classList.remove('active');
    } else {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
        document.getElementById('tabLogin').classList.remove('active');
        document.getElementById('tabRegister').classList.add('active');
    }
}

function loginWithGmail() {
    // Simulation de connexion Gmail
    const gmail = 'utilisateur@gmail.com';
    utilisateurConnecte = { email: gmail, nom: 'Utilisateur Gmail', provider: 'gmail' };
    sauvegarderLocalStorage();
    showToast('Connecté avec Gmail !');
    afficherProfil();
    goToScreen(5);
}

function showLoginPrompt() {
    const promptCard = document.getElementById('loginPromptCard');
    const panel = document.getElementById('formPanel');
    if(promptCard) promptCard.style.display = 'none';
    if(panel) panel.style.display = 'block';
    switchForm('login');
    const input = document.getElementById('loginEmail');
    if(input) input.focus();
}

function login() {
    const identifier = document.getElementById('loginEmail').value.trim();
    const pwd = document.getElementById('loginPwd').value.trim();

    document.getElementById('loginEmailErr').style.display = 'none';
    document.getElementById('loginPwdErr').style.display = 'none';

    if(!identifier || !pwd) {
        if(!identifier) document.getElementById('loginEmailErr').style.display = 'block';
        if(!pwd) document.getElementById('loginPwdErr').style.display = 'block';
        return;
    }

    const isEmail = identifier.includes('@');
    utilisateurConnecte = {
        email: isEmail ? identifier : '',
        nom: isEmail ? identifier.split('@')[0] : identifier
    };
    sauvegarderLocalStorage();
    showToast('Connecté avec succès !');
    afficherProfil();
    goToScreen(5);
}

function register() {
    const nom = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const pwd = document.getElementById('regPwd').value;

    if(!nom) document.getElementById('regNameErr').style.display = 'block';
    if(!email) document.getElementById('regEmailErr').style.display = 'block';
    if(pwd.length < 6) document.getElementById('regPwdErr').style.display = 'block';

    if(nom && email && pwd.length >= 6) {
        utilisateurConnecte = { email, nom };
        sauvegarderLocalStorage();
        showToast('Compte créé avec succès !');
        afficherProfil();
        goToScreen(5);
    }
}

function afficherProfil() {
    const profileDiv = document.getElementById('userProfile');
    if(!profileDiv) return;

    if(!utilisateurConnecte) {
        profileDiv.innerHTML = '<p style="text-align:center;">Veuillez vous connecter</p>';
        return;
    }

    profileDiv.innerHTML = `
        <div style="padding:10px;">
            <p><strong>Nom :</strong> ${utilisateurConnecte.nom}</p>
            <p><strong>Email :</strong> ${utilisateurConnecte.email}</p>
            <button class="form-btn outline-btn" onclick="logout()" style="margin-top:10px;">Déconnexion</button>
        </div>
    `;
}

function logout() {
    utilisateurConnecte = null;
    sauvegarderLocalStorage();
    showToast('Déconnecté');
    goToScreen(1);
}

// ====================== PAIEMENT ======================
function goToPayment() {
    if(panier.length === 0) {
        showToast('Votre panier est vide');
        return;
    }
    
    const modePaiement = document.getElementById('paymentMethod').value;
    
    closeCartSidebar();
    afficherRecapPaiement(modePaiement); // on passe le mode
    goToScreen(6);
}

function afficherRecapPaiement(mode) {
    const recap = document.getElementById('paymentRecap');
    if(!recap) return;

    let total = 0;
    let html = '<div style="background:#f5f5f5;padding:10px;border-radius:6px;margin-bottom:15px;">';
    
    const modes = {
        card: '💳 Carte bancaire',
        mobile: '📱 Mobile Money',
        cash: '💵 Paiement à la livraison'
    };
    
    html += `<p><strong>Mode de paiement :</strong> ${modes[mode]}</p ><hr style="margin:8px 0;">`;
    html += '<h4>Récapitulatif :</h4>';

    panier.forEach(prod => {
        const prix = getPrixNum(prod.prix);
        total += prix;
        html += `<p style="margin:5px 0;"><strong>${prod.nom}</strong> - ${prod.prix}</p >`;
    });

    html += `<hr><p style="font-weight:bold;color:var(--main-red);">TOTAL : ${total.toFixed(2)} €</p ></div>`;
    recap.innerHTML = html;
    
    // Si paiement à la livraison, on cache les champs carte
    const cardFields = document.querySelectorAll('#screen6 .form-group');
    if(mode === 'cash') {
        cardFields.forEach((f,i) => {
            if(i >= 3) f.style.display = 'none'; // cache carte, date, cvv
        });
    } else {
        cardFields.forEach(f => f.style.display = 'block');
    }
}

function submitPayment() {
    const modePaiement = document.getElementById('paymentMethod').value;
    
    // Si carte, on valide les champs
    if(modePaiement === 'card') {
        const name = document.getElementById('payName').value;
        const email = document.getElementById('payEmail').value;
        const phone = document.getElementById('payPhone').value;
        const card = document.getElementById('payCard').value.replace(/\s/g, '');
        const date = document.getElementById('payDate').value;
        const cvv = document.getElementById('payCvv').value;

        let valid = true;
        document.querySelectorAll('.form-text-error').forEach(e => e.style.display = 'none');

        if(!name) { document.getElementById('payNameErr').style.display = 'block'; valid = false; }
        if(!email || !email.includes('@')) { document.getElementById('payEmailErr').style.display = 'block'; valid = false; }
        if(!phone || phone.length < 10) { document.getElementById('payPhoneErr').style.display = 'block'; valid = false; }
        if(card.length !== 16) { document.getElementById('payCardErr').style.display = 'block'; valid = false; }
        if(!/^\d{2}\/\d{2}$/.test(date)) { document.getElementById('payDateErr').style.display = 'block'; valid = false; }
        if(cvv.length !== 3) { document.getElementById('payCvvErr').style.display = 'block'; valid = false; }

        if(!valid) return;
    }
    
    // Si Mobile Money, juste nom + tel
    if(modePaiement === 'mobile') {
        const name = document.getElementById('payName').value;
        const phone = document.getElementById('payPhone').value;
        if(!name || !phone) {
            showToast('Nom et téléphone requis pour Mobile Money');
            return;
        }
    }

    // Créer la commande
    const commande = {
        numero: 'CMD-' + Date.now(),
        date: new Date().toLocaleDateString('fr-FR'),
        montant: panier.reduce((sum, p) => sum + getPrixNum(p.prix), 0),
        produits: [...panier],
        modePaiement: modePaiement
    };

    commandes.push(commande);
    sauvegarderLocalStorage();

    document.getElementById('cmdNumber').textContent = commande.numero;
    document.getElementById('cmdDate').textContent = commande.date;

    panier = [];
    sauvegarderLocalStorage();
    updateCartBadge();

    goToScreen(7);
    showToast('Commande validée avec succès !');
}

function afficherRecapPaiement() {
    const recap = document.getElementById('paymentRecap');
    if(!recap) return;

    let total = 0;
    let html = '<div style="background:#f5f5f5;padding:10px;border-radius:6px;margin-bottom:15px;"><h4>Récapitulatif :</h4>';

    panier.forEach(prod => {
        const prix = getPrixNum(prod.prix);
        total += prix;
        html += `<p style="margin:5px 0;"><strong>${prod.nom}</strong> - ${prod.prix}</p>`;
    });

    html += `<hr><p style="font-weight:bold;color:var(--main-red);">TOTAL : ${total.toFixed(2)} €</p></div>`;
    recap.innerHTML = html;
}

function submitPayment() {
    const name = document.getElementById('payName').value;
    const email = document.getElementById('payEmail').value;
    const phone = document.getElementById('payPhone').value;
    const card = document.getElementById('payCard').value.replace(/\s/g, '');
    const date = document.getElementById('payDate').value;
    const cvv = document.getElementById('payCvv').value;

    let valid = true;

    if(!name) { document.getElementById('payNameErr').style.display = 'block'; valid = false; }
    if(!email || !email.includes('@')) { document.getElementById('payEmailErr').style.display = 'block'; valid = false; }
    if(!phone || phone.length < 10) { document.getElementById('payPhoneErr').style.display = 'block'; valid = false; }
    if(card.length !== 16) { document.getElementById('payCardErr').style.display = 'block'; valid = false; }
    if(!/^\d{2}\/\d{2}$/.test(date)) { document.getElementById('payDateErr').style.display = 'block'; valid = false; }
    if(cvv.length !== 3) { document.getElementById('payCvvErr').style.display = 'block'; valid = false; }

    if(!valid) return;

    // Créer la commande
    const commande = {
        numero: 'CMD-' + Date.now(),
        date: new Date().toLocaleDateString('fr-FR'),
        montant: panier.reduce((sum, p) => sum + getPrixNum(p.prix), 0),
        produits: [...panier]
    };

    commandes.push(commande);
    sauvegarderLocalStorage();

    // Afficher confirmation
    document.getElementById('cmdNumber').textContent = commande.numero;
    document.getElementById('cmdDate').textContent = commande.date;

    panier = [];
    sauvegarderLocalStorage();
    updateCartBadge();

    goToScreen(7);
    showToast('Paiement effectué avec succès !');
}

// ====================== HISTORIQUE COMMANDES ======================
function afficherHistorique() {
    const historyList = document.getElementById('orderHistoryList');
    if(!historyList) return;

    if(commandes.length === 0) {
        historyList.innerHTML = '<p style="text-align:center;color:#999;">Aucune commande</p>';
        return;
    }

    historyList.innerHTML = '';
    commandes.forEach(cmd => {
        const item = document.createElement('div');
        item.style.cssText = 'padding:10px;border-bottom:1px solid #eee;';
        item.innerHTML = `
            <p><strong>${cmd.numero}</strong> - ${cmd.date}</p>
            <p style="color:var(--main-red);font-weight:bold;">${cmd.montant.toFixed(2)} €</p>
        `;
        historyList.appendChild(item);
    });
}

// ====================== ONGLETS SUPÉRIEURS ======================
function setupTopTabs() {
    const tabs = document.querySelectorAll('.top-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const tabName = tab.dataset.tab;
            if(tabName === 'produits') goToScreen(2);
            else if(tabName === 'fabricants') goToScreen(8);
            else if(tabName === 'monde') goToScreen(9);
            else if(tabName === 'c') {
                goToScreen(4);
                showLoginPrompt();
            }
        });
    });
}

// ====================== NAVIGATION INFÉRIEURE ======================
function setupBottomNav() {
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // align bottom nav indices with HTML screens
            const screens = [1, 2, 10, 11, 12];
            goToScreen(screens[index]);
        });
    });
}

// ====================== INITIALISATION ======================
window.addEventListener("DOMContentLoaded", () => {
    afficherProduits(produits);
    afficherPanier();
    updateCartBadge();
    setupTopTabs();
    setupBottomNav();
    updateBackBtnVisibility();
    
    // Fermer sidebar au clic dehors
    const overlay = document.getElementById('cartSidebarOverlay');
    if(overlay) {
        overlay.addEventListener('click', (e) => {
            if(e.target === overlay) closeCartSidebar();
        });
    }

    // Fermer modal au clic sur X
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.modal-close');
    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
});
function goToPayment() {
    if(panier.length === 0) {
        showToast('Votre panier est vide');
        return;
    }
    
    const modePaiement = document.getElementById('paymentMethod').value;
    
    closeCartSidebar();
    afficherRecapPaiement(modePaiement); // on passe le mode
    goToScreen(6);
}

function afficherRecapPaiement(mode) {
    const recap = document.getElementById('paymentRecap');
    if(!recap) return;

    let total = 0;
    let html = '<div style="background:#f5f5f5;padding:10px;border-radius:6px;margin-bottom:15px;">';
    
    const modes = {
        card: '💳 Carte bancaire',
        mobile: '📱 Mobile Money',
        cash: '💵 Paiement à la livraison'
    };
    
    html += `<p><strong>Mode de paiement :</strong> ${modes[mode]}</p ><hr style="margin:8px 0;">`;
    html += '<h4>Récapitulatif :</h4>';

    panier.forEach(prod => {
        const prix = getPrixNum(prod.prix);
        total += prix;
        html += `<p style="margin:5px 0;"><strong>${prod.nom}</strong> - ${prod.prix}</p >`;
    });

    html += `<hr><p style="font-weight:bold;color:var(--main-red);">TOTAL : ${total.toFixed(2)} €</p ></div>`;
    recap.innerHTML = html;
    
    // Si paiement à la livraison, on cache les champs carte
    const cardFields = document.querySelectorAll('#screen6 .form-group');
    if(mode === 'cash') {
        cardFields.forEach((f,i) => {
            if(i >= 3) f.style.display = 'none'; // cache carte, date, cvv
        });
    } else {
        cardFields.forEach(f => f.style.display = 'block');
    }
}

function submitPayment() {
    const modePaiement = document.getElementById('paymentMethod').value;
    
    // Si carte, on valide les champs
    if(modePaiement === 'card') {
        const name = document.getElementById('payName').value;
        const email = document.getElementById('payEmail').value;
        const phone = document.getElementById('payPhone').value;
        const card = document.getElementById('payCard').value.replace(/\s/g, '');
        const date = document.getElementById('payDate').value;
        const cvv = document.getElementById('payCvv').value;

        let valid = true;
        document.querySelectorAll('.form-text-error').forEach(e => e.style.display = 'none');

        if(!name) { document.getElementById('payNameErr').style.display = 'block'; valid = false; }
        if(!email || !email.includes('@')) { document.getElementById('payEmailErr').style.display = 'block'; valid = false; }
        if(!phone || phone.length < 10) { document.getElementById('payPhoneErr').style.display = 'block'; valid = false; }
        if(card.length !== 16) { document.getElementById('payCardErr').style.display = 'block'; valid = false; }
        if(!/^\d{2}\/\d{2}$/.test(date)) { document.getElementById('payDateErr').style.display = 'block'; valid = false; }
        if(cvv.length !== 3) { document.getElementById('payCvvErr').style.display = 'block'; valid = false; }

        if(!valid) return;
    }
    
    // Si Mobile Money, juste nom + tel
    if(modePaiement === 'mobile') {
        const name = document.getElementById('payName').value;
        const phone = document.getElementById('payPhone').value;
        if(!name || !phone) {
            showToast('Nom et téléphone requis pour Mobile Money');
            return;
        }
    }

    // Créer la commande
    const commande = {
        numero: 'CMD-' + Date.now(),
        date: new Date().toLocaleDateString('fr-FR'),
        montant: panier.reduce((sum, p) => sum + getPrixNum(p.prix), 0),
        produits: [...panier],
        modePaiement: modePaiement
    };

    commandes.push(commande);
    sauvegarderLocalStorage();

    document.getElementById('cmdNumber').textContent = commande.numero;
    document.getElementById('cmdDate').textContent = commande.date;

    panier = [];
    sauvegarderLocalStorage();
    updateCartBadge();

    goToScreen(7);
    showToast('Commande validée avec succès !');
}

