# 常用 Git 命令清单

注：原始作者为阮一峰，后在此基础上做修改

几个专有名词的译名

> - Workspace：工作区
> - Index / Stage：暂存区
> - Repository：仓库区（或本地仓库）
> - Remote：远程仓库
> - Local Branch：本地分支
> - Remote Branch：远程分支
> - Local Tracking branch：本地追踪分支
> - Remote Tracking branch：远程追踪分支

## 一、新建代码库

---

```shell
# 在当前目录新建一个 Git 代码库
$ git init

# 新建一个目录，将其初始化为 Git 代码库
$ git init [project-name]

# 下载一个项目和它的整个代码历史
$ git clone [url]
```

## 二、配置

---

```shell
# 显示当前的 Git 版本
$ git --version

# 显示当前的 Git 配置
$ git config --list

# 编辑 Git 配置文件
$ git config -e [--global]

# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```

## 三、增加/删除文件

---

```shell
# 添加指定文件到暂存区
$ git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
$ git add [dir]

# 添加当前目录的所有文件到暂存区
$ git add .

# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...
```

## 四、代码提交

---

```shell
# 提交暂存区到仓库区
$ git commit -m ["message"]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m ["message"]
```

## 五、分支: 一个分支就是一组独特的代码更改

---

```shell
# 列出所有本地分支
$ git branch

# 列出所有远程分支
$ git branch -r

# 列出所有本地分支和远程分支
$ git branch -a

# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]

# 新建一个分支，并切换到该分支
$ git checkout -b [branch]

# 重命名当前分支
$ git branch -M [rename]

# 新建一个分支，与指定的远程分支建立追踪关系,之后就可以直接使用 git push/pull 来提交或者拉取更新
$ git branch --track [branch] [remote-branch]

# 切换到指定分支，并更新工作区
$ git switch

# 切换到指定分支，并更新工作区
$ git checkout [branch-name]

# 切换到上一个分支
$ git checkout -

# 合并指定分支到当前分支
$ git merge [branch]

# 有冲突的时候放弃merge
$ git merge --abort

# 进行合并时不要将被合并分支的commit记录带进来,只取代码变更,并生成一个新的commit,重新提交即可。
$ git merge --squash

# 以将一个分支变基到另一个分支,用于合并两条分支历史
$ git rebase

# 选择一个 commit，合并进当前分支, 会生成一个新的 commit id
$ git cherry-pick [commit]

# 删除分支 (-d 只有该分支被合并以后才可以删除；-D 无论是否合并，强制删除)
$ git branch -d [branch-name]

# 同步删除远程分支
$ git push origin --delete branchName

```

注：

1. 在不同分支工作时，不会在另外分支显示，也就不会对另外分支造成影响。
2. HEAD 指向整个分支中的最新提交
3. detached HEAD，是使用 checkout 命令恢复某一个时段之前提交的状态到工作区，这个状态下的头部，即使你在这个头部添加内容，添加新文件，提交，仍然不会对原本的主分支造成影响(同时生成一个代码)，如果想要保留这些影响，需要新开一个分支。接着把这个更改合并到主分支。
4. **注意：要删除的分支尽量要思考或者检查是否应该合并进主分支或其他分支。**
5. git rabase 会重新提交从而改变 commitID，**谨慎使用**！！！

git switch 命令和 git checkout 命令的区别

1. git switch 命令是自 Git 2.23 版本引入的，而 git checkout 命令则是 Git 的早期命令。所以，在使用 Git 的最新版本时，建议使用 git switch 命令。
2. git switch 命令只用于分支操作，而 git checkout 命令除了可以切换分支外，还可以用于恢复文件。
3. git switch 命令更加直观，因为它的名称明确地表明了其用途。与此相比，git checkout 命令有时会令人困惑，因为它还有其他用途，例如创建分支或标签。
4. git switch 命令在切换分支时更加安全。**它会检查当前分支是否被修改并拒绝切换，以避免潜在的代码丢失。**而 git checkout 命令则没有这种检查机制，所以在切换分支时需要特别小心，以免不小心覆盖了未提交的更改。

fast-forward merge 与 non fast-forward merge

1. fast-forward merge 需要 No additional commit in master(after feature branch was created)
2. fast-forward merge Additional commits in both master & feature branch after feature branch was created，Additional (merge) commit is created in master branch

3. git merge --squash,feature 分支有 5 个 commit,这会将 feature 分支的 5 个 commit 都合并进来,这会只取 feature 分支的代码变更,生成一个新的 commit,而不保留它原有的 5 个 commit

## 六、标签

---

```shell
# 列出所有tag
$ git tag

# 新建一个tag在当前commit
$ git tag [tag]

# 新建一个带有注释的tag
$ git tag -a [tag] -m [" "]

# 新建一个tag在指定commit
$ git tag [tag] [commit]

# 删除本地tag
$ git tag -d [tag]

# 查看tag信息
$ git show [tag]

# 切换到指定tag
$ git checkout [tag]
```

## 七、查看信息

---

```shell
# 显示有变更的文件
$ git status

# 显示当前分支的版本历史、提交历史
$ git log

# 列出仓库中所有被跟踪的文件。
$ git ls-files

# 列出仓库中所有未被跟踪的文件。这些文件可能包含在 .gitignore 文件中，因此不会被 Git 版本控制系统跟踪。
$ git ls-files --others

# 列出仓库中所有被修改过但还未提交的文件。
$ git ls-files --modified

# 列出仓库中所有被跟踪的文件，以及它们在索引中的状态。
$ git ls-files --stage

# 显示当前分支的最近几次提交,并且可以通过哈希值带回被删除的项目
$ git reflog
```

注：
git ls-files 命令会返回 Git 仓库中所有的 已跟踪文件（tracked files）。"已跟踪文件"是指那些已经被 Git 管理的文件，包括已经提交到仓库中的文件以及在工作目录中的新文件。

## 八、远程同步

---

```shell
# 显示当前的远程服务器
$ git remote

# 显示当前的远程分支信息
$ git remote show origin

# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]

# 上传本地指定分支到远程仓库
$ git push [remote] [branch]

# 在远程仓库没有该本地分支的时候，上传本地指定分支到远程仓库,并且创建一个本地跟踪分支
$ git push -u [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送所有分支到远程仓库
$ git push [remote] --all
```

## 九、撤销

---

```shell
# 恢复暂存区的指定文件到工作区:在工作区修改了一个文件,发现修改错了,想撤销修改,就可以用 git restore 把文件恢复到最后一次 commit 的状态:
$ git restore [file]

# 你把文件 add 到了暂存区,后来发现还是不要暂存这个修改,想从暂存区撤销出来（老方法需要两步）
$ git restore --staged [fileName] ----> git checkout [file] (这一步是把对文件的新的修改删除)

# 恢复删除的文件,这会从暂存区恢复文件到工作区
$ git restore <deleted-file>

# 恢复暂存区的指定文件到工作区 [还没 add 到暂存区]
$ git checkout [file]

# 恢复某一个时段之前提交的状态到工作区
$ git checkout [commitId]

# 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变
$ git reset [file]

# **重置暂存区与工作区**，与上一次 commit 保持一致
$ git reset --hard [HEAD~1]

# 撤销所有未被追踪的目录和文件
$ git clean -dn ---> git clean -df

# 暂时将未提交的变化移除，稍后再移入
$ git stash

# 取出最近一次暂存的改动,并应用到当前工作目录
$ git stash pop

# 取出最近一次暂存的改动,但不删除暂存
$ git stash apply

# 删除最近的一次改动
$ git stash drop

# 显示所有暂存的改动
$ git stash list

# 删除所有暂存的改动。
$ git stash clear
```

注 1：git stash 用于暂存当前正在工作的内容,使工作目录回到干净状态。当你正在做一半的工作,还不想提交,但是需要切换到其他分支处理其它事情时,可以使用 git stash 将当前工作现场“储藏”起来,等以后回来继续工作时,再从 stash 中恢复。

具体来说,git stash 会将当前未提交的修改暂存到栈中,你可以多次 stash,这些 stash 会形成一个栈结构,后 stash 的会在栈顶。当你需要恢复 stash 时,可以使用 git stash pop 或 git stash apply 命令,默认恢复栈顶的 stash,也可以通过参数指定恢复哪一个 stash。

所以简单总结 git stash 的作用就是:

1. 暂存当前未提交的修改。
2. 清理工作目录,还原到干净状态。
3. 多次 stash 形成栈结构,可以随时恢复。
4. 在其他分支工作时,用来保存当前工作现场。
5. 这样可以理解 git stash 的基本作用了。

## 十、.gitignore 文件夹

---

忽略某种类型的文件
_.文件类型 （如 _.log）

忽略某种类型的文件但是保留某个单独的文件
![name.file] (eg: !test.log)

忽略某个的文件夹
[filename]/

## Understanding GitHub Accounts & Repository Types

## Collaborating in GitHub & ccontributing to Open Source Projects

## Creating your GitHub Portfolio Page & More Features to Explore

# 开源项目指南

opensource.guide
