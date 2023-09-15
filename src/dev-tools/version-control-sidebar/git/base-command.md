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

- git stash(保存)
  git stash 是 Git 提供的一个命令，用于保存当前工作目录的改动，并将工作目录重置为上一次提交的状态。它可以在你不想提交当前改动但需要切换到其他分支或进行其他操作时非常有用。

  当你运行 git stash 命令时，Git 会执行以下操作：

  将当前工作目录和暂存区中的改动保存为一个临时的存储区域，称为 "stash"。
  将工作目录和暂存区重置为上一次提交的状态，使你的工作目录变为干净的状态。
  你可以通过 git stash save "message" 命令添加一条说明信息来保存 stash。例如：
  ```sh
  git stash save "My work in progress"
  ```
  要恢复之前保存的 stash 并将其应用到工作目录中，你可以使用 git stash apply 或 git stash pop 命令。两者的区别在于 git stash apply 只应用 stash，而 git stash pop 除了应用 stash，还会将该 stash 从 stash 列表中移除。

  以下是一些常用的 git stash 相关命令：

  git stash list：显示所有保存的 stash 列表。
  git stash apply stash@{n}：将指定的 stash (stash@{n}) 应用到工作目录。
  git stash pop stash@{n}：将指定的 stash (stash@{n}) 应用到工作目录，并从 stash 列表中移除。
  git stash drop stash@{n}：移除指定的 stash (stash@{n})。
  git stash clear：移除所有保存的 stash。
  git stash 是一种非常有用的命令，可以帮助你在不提交改动的情况下管理和切换工作区。

  > git stash 能否用于同一分支的不同commit?
  是的，git stash 命令可以在同一分支的不同提交（commit）之间使用。

  当你在工作目录中进行一些修改并且还没有准备好提交它们时，你可以使用 git stash 命令将这些修改暂存起来，并将工作目录恢复到上一个提交的状态。这样做可以让你暂时保存修改而不需要提交它们。

  随后，你可以切换到另一个提交，并对该提交进行操作。如果需要，你可以在不同的提交之间多次使用 git stash 进行保存和恢复。

  最后，当你想要将之前暂存的修改应用回工作目录时，可以使用 git stash apply 或 git stash pop 命令。git stash apply 会应用最近的暂存，并保留暂存内容以供将来的使用，而 git stash pop 则会应用最近的暂存并从暂存列表中移除该暂存。

  总结来说，你可以通过 git stash 在同一分支的不同提交之间保存、恢复和切换修改。这对于在不同的提交之间进行实验、测试和修改非常有用。
