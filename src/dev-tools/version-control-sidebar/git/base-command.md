# 常用命令
- 初始化本地仓库并关联远程
```
echo "# image-compressor" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/jyj1202/image-compressor.git
git push -u origin main
```

- 修改远程仓库地址
```sh
git remote set-url origin <地址>
```

- 拉取某个远程分支
```sh
git checkout -b <本地分支名> origin/<远程分支名>
git checkout -b myfeature origin/feature
```

- 撤销提交revert
```sh
# git revert用于撤销某次提交的修改
# git revert 对于多次提交修改相同文件的情况可能会出现冲突
# 命令:
git revert <commit hash>

git log --pretty=oneline --abbrev-commit
9792e14 (HEAD -> master, origin/master, origin/HEAD) Revert "chore: add image-webpack-loader"
da0d875 Merge branch 'master' of http://192.168.33.61:10101/r/sso-service
29f81cc chore: add image-webpack-loader

git revert 29f81cc
```