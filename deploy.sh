set -e

npm run build

cd dist

git init
git add -A
git commit -m 'Deployment HCI v1 - ismat'
git push -f git@github.com:i5mat/ismat-portfolio-hci.git master:gh-pages

cd -