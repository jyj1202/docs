# git 分支
## 分支操作
- 查看本地分支上游分支 git branch -vv

- 推送本地分支到远程
  第一次推送需要加-u
  git push origin local-branch-name:remote-branch-name

  > 如果我对已经建立联系的本地分支，进行git push origin   local-branch-name:remote-branch-name -u命令，会发生什么

  如果你对已经建立联系的本地分支执行 git push origin  local-branch-name:remote-branch-name -u 命令，将会发生以下情况：

  远程分支更新：如果远程仓库中已经存在名为 remote-branch-name 的分支，则该  命令会将本地分支 local-branch-name 的提交推送到远程仓库中的   remote-branch-name 分支，并更新远程分支的提交历史。

  关联远程分支：使用 -u 参数会建立本地分支 local-branch-name 与远程分支 remote-branch-name 之间的关联。这会使得以后的 git pull 和 git push 令可  以更方便地进行操作，无需再指定远程分支的名称。
  设置上游分支：如果当前本地分支还没有与任何远程分支建立追踪关系，则使用-u 参 数会将远程分支 remote-branch-name 设置为当前本地分支的上游分（upstream   branch）。这样，在后续的 git pull 或 git push 操作时，可直接使用 git  pull 或 git push，而不需要指定远程分支的名称。
  总之，执行 git push origin local-branch-name:remote-branch-name -u命令  会将本地分支的提交推送到远程仓库中的指定分支并建立关联，方便后续的作。
  需要注意的是，如果远程分支已经存在且与其他开发者共享，推荐在执行推送之与团  队成员进行讨论以避免可能的冲突和数据丢失。
  > 如果远程仓库中不存在名为 remote-branch-name 的分支，但是本地分支已和远  程另一个分支关联了呢?
  
  如果远程仓库中不存在名为 remote-branch-name 的分支，但是本地分支已经远程  的另一个分支建立了关联，那么执行 git push   originlocal-branch-name:remote-branch-name -u 命令会发生以下情况：
  创建新的远程分支：由于远程仓库中不存在名为 remote-branch-name 的分支该命  令会将本地分支 local-branch-name 的提交推送到远程仓库，并在远程仓中创建一 个新的 remote-branch-name 分支，该分支与本地分支关联。
  更新关联分支：由于本地分支已与远程的另一个分支关联，执行推送操作后，本分支  的追踪关系将被更新为新创建的远程分支 remote-branch-name。这样，以的 git   pull 和 git push 操作就可以直接使用 git pull 或 git push，无指定远程分支  的名称。
  需要注意的是，执行 git push   originlocal-branch-name:remote-branch-name -u 命令时，确保你有足够的权  限远程仓库上进行推送操作。


## tag
  - 
    ```sh
    git tag -a test -m test 94e6e728b88a9a6c28d573ff972a4aaa111cc55d  (completed in 0.087s)
    git tag -d test  (completed in 0.092s)
    ```

  - git push --follow-tags origin master
  
    用于将本地分支的提交以及与之关联的标签一起推送到远程仓库。

    下面是对该命令中每个部分的解释：

    git push: 这是用于将本地分支的更改推送到远程仓库的 Git 命令。
    --follow-tags: 这是一个选项，它告诉 Git 在推送时将所有本地标签与相应的提交一起推送到远程仓库。如果标签与已提交的 commit 相关联，那么这些标签也会被推送。
    origin: 这是远程仓库的名称，通常指定为 "origin"。它表示你要将更改推送到与本地仓库关联的远程仓库。
    master: 这是本地分支的名称，通常表示主分支（例如，"master"、"main" 或其他自定义名称）。
    因此，git push --follow-tags origin master 的含义是将本地分支 master 的所有提交以及与之相关联的标签一起推送到名为 origin 的远程仓库。这样可以确保在推送的同时，相关的标签也被同步到远程仓库中，方便其他开发人员或协作者访问和使用这些标签。
  
## git 工作流
