# Design System — Startuper.io

> **Source unique de vérité : le hero de référence (`components/ui/index.tsx`).**
> Toutes les valeurs ci-dessous sont extraites DIRECTEMENT du code du hero.
> Règle absolue : avant toute modification impliquant une couleur, relis ce fichier.
> Si une couleur manque, ne l'invente jamais — reviens vérifier dans le hero.

## Palette extraite du hero

Le hero est un thème **sombre** : fond `#000000`, texte `#FFFFFF`, boutons gris clair
(`zinc-200` / `zinc-300`) avec texte noir. Aucune couleur « chaude » (amber/red) n'existe
dans le *code* du hero — les dégradés colorés visibles proviennent de l'image de fond
externe (`hero-31-bg.avif`), non extraite en hex ici.

### 60% — Dominante (fonds)

| Variable | Valeur | Source hero |
|----------|--------|-------------|
| `--bg-primary` | `#000000` | wrapper `bg-black` (`index.tsx:92`) |
| `--bg-secondary` | `#0A0A0A` | variation sombre pour sections alternées (dérivée de `#000`, non présente telle quelle dans le hero — à valider visuellement) |

> Note : `--bg-secondary` est une *légère variation* autorisée par la règle 60-30-10 pour
> alterner les sections. Elle n'apparaît pas dans le hero (qui est uniformément `#000`).
> Si tu veux du purisme absolu, utilise `--bg-primary` partout.

### 30% — Secondaire (accents)

| Variable | Valeur | Statut |
|----------|--------|--------|
| `--accent-amber` | *non présent dans le hero* | À dériver de l'image de fond si besoin — NE PAS INVENTER |
| `--accent-red` | *non présent dans le hero* | À dériver de l'image de fond si besoin — NE PAS INVENTER |

> Ces deux variables sont documentées mais **vides** : le code du hero ne contient aucune
> teinte chaude. Le prompt les mentionnait comme « visibles dans l'image de fond », mais
> l'image est un asset externe non extractible depuis le code. Par fidélité à la consigne
> « source unique = hero », elles ne sont pas renseignées.

### 10% — Accent (boutons, actions)

| Variable | Valeur | Source hero |
|----------|--------|-------------|
| `--cta-bg` | `#E4E4E7` | bouton "Sign up" `bg-zinc-200` (`index.tsx:125`) |
| `--cta-bg-alt` | `#D4D4D8` | bouton "Request a Demo" `bg-zinc-300` (`index.tsx:165`) |
| `--cta-text` | `#000000` | texte des deux boutons `text-black` (`index.tsx:125,165`) |
| `--cta-hover` | *non défini dans le hero* | Le hero n'a aucun état hover de couleur (seulement `active:scale`). Omis volontairement. |

> Les boutons "Sign up" et "Request a Demo" ont des fonds **légèrement différents**
> (`zinc-200` vs `zinc-300`). Pour matcher le hero au repos, les nouveaux boutons
> primaires utilisent `--cta-bg` (`#E4E4E7`), les boutons secondaires `--cta-bg-alt`
> (`#D4D4D8`). Même texte noir (`--cta-text`) dans tous les cas.
> Le shadow inset (`rgba(255,255,255,1)` haut / `rgba(0,0,0,0.2)` bas) du hero est
> reproduit tel quel sur les nouveaux boutons.

### Texte

| Variable | Valeur | Source hero |
|----------|--------|-------------|
| `--text-primary` | `#FFFFFF` | titre H1 `text-white` (`index.tsx:140`) |
| `--text-body` | `rgba(255,255,255,0.8)` | sous-titre `text-white/80` (`index.tsx:159`) |
| `--text-nav` | `rgba(255,255,255,0.7)` | liens nav `text-white/70` (`index.tsx:118`) |
| `--text-tertiary` | `rgba(255,255,255,0.5)` | "Trusted by" `text-white/50` (`index.tsx:180`) |

## Règle 60-30-10 (appliquée)

- **60 %** fond sombre (`--bg-primary` / `--bg-secondary`)
- **30 %** texte et structure (`--text-primary`, `--text-body`, `--text-nav`, `--text-tertiary`)
- **10 %** boutons d'action (`--cta-bg`, `--cta-bg-alt`, `--cta-text`)

## Contraintes de non-régression

- [ ] Le hero (`components/ui/index.tsx`) n'est JAMAIS reconnecté à ces variables — il reste tel quel.
- [ ] Aucune couleur en dehors de celles listées ici.
- [ ] Aucun noir pur / blanc pur introduit ailleurs que ce qui existait déjà dans le hero.
- [ ] `--cta-hover` n'apparaît qu'au survol, jamais par défaut (et n'est pas défini tant qu'absent du hero).
