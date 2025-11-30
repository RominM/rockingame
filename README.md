# Rom Nuxt Starter 🚀

**Rom Nuxt Starter** est un starter Nuxt 3 minimaliste et optimisé pour gagner du temps sur le setup d’un nouveau projet.  
Il inclut une structure de base prête à l’emploi et quelques bonnes pratiques pour démarrer rapidement.

---

## ⚡ Objectifs

- Fournir un **point de départ stable** pour les projets Nuxt 3.  
- Permettre de **cloner facilement** ce starter sans modifier le repo original.  
- Offrir un environnement prêt à l’emploi pour ajouter tes propres améliorations.

---

## 📌 Important

1. Ce projet est **destiné à être utilisé comme template**.  
   - Ne modifie pas directement ce repo si tu veux créer un nouveau projet.  
   - Utilise l’option **“Use this template”** sur GitHub pour générer un nouveau repo.  

2. Si tu veux améliorer le starter pour tous tes futurs projets :  
   - Fais tes modifications sur la branche `dev` ou directement sur `main`.  
   - Merge uniquement les changements validés pour garder le starter stable.  

3. Ne change pas le nom du projet original dans le repo.  
   - Pour chaque nouveau projet, change le nom dans le nouveau repo cloné depuis le template.

---

## 🛠️ Installation (nouveau projet à partir du template)

```bash
# Cloner depuis le template
gh repo create mon-nouveau-projet --template RominM/rom-nuxt-starter

# Aller dans le dossier
cd mon-nouveau-projet

# Installer les dépendances
npm install

# Copier le fichier d'environnement exemple
cp .env.example .env

# Lancer le projet
npm run dev
```

## 🧰 Structure du projet

```bash
.
├─ assets/         # Styles, images, polices
├─ components/     # Composants réutilisables
├─ composables/    # Fonctions Vue 3 réutilisables
├─ layouts/        # Layouts principaux
├─ pages/          # Pages Nuxt
├─ plugins/        # Plugins Vue/Nuxt
├─ public/         # Fichiers statiques
├─ store/          # Pinia store
└─ nuxt.config.ts  # Configuration Nuxt
```

## ⚙️ Bonnes pratiques

- Toujours utiliser des branches pour expérimenter.
- Ne jamais modifier directement le starter original pour un nouveau projet.
- Créer des scripts d’init si tu clones souvent le projet (npm run setup, etc.).
- Documenter toutes les améliorations du starter pour les garder propres.

## 📖 Notes

- Ce projet est public, mais conçu pour un usage personnel et multi-projets.
- Tu peux ajouter des fonctionnalités, les tester et les fusionner dans le starter principal.
