git config --global user.email "anmail@ukr.net"
git config --global user.name "ntlx"

echo "# webapi" >> README.md
git init
git add *
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:2f-ntlx/webapi.git
git push -u origin main
