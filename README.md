# egcoo.github.io

Egcoo's personal site

# 常用 Git 命令清单

作者： 阮一峰

几个专有名词的译名

- Workspace：工作区
- Index / Stage：暂存区
- Repository：仓库区（或本地仓库）
- Remote：远程仓库

## 一、新建代码库

在当前目录新建一个 Git 代码库
git init

新建一个目录，将其初始化为 Git 代码库
git init [project-name]

下载一个项目和它的整个代码历史
git clone [url]

## 二、配置

显示当前的 Git 配置
git config --list

编辑 Git 配置文件
git config -e [--global]

设置提交代码时的用户信息
git config [--global] user.name "[name]"
git config [--global] user.email "[email address]"

## 三、增加/删除文件

添加指定文件到暂存区
git add [file1] [file2] ...

添加指定目录到暂存区，包括子目录
git add [dir]

添加当前目录的所有文件到暂存区
git add .

## 四、代码提交

提交暂存区到仓库区
git commit -m [message]

提交暂存区的指定文件到仓库区
git commit [file1] [file2] ... -m [message]

## 五、分支: 一个分支就是一组独特的代码更改

注意的点：

1. 在不同分支工作时，不会在另外分支显示，也就不会对另外分支造成影响。
2. HEAD 指向整个分支中的最新提交

列出所有本地分支
git branch

新建一个分支，但依然停留在当前分支
git branch [branch-name]

新建一个分支，并切换到该分支
git checkout -b [branch]

切换到指定分支，并更新工作区
git checkout [branch-name]

切换到上一个分支
git checkout -

合并指定分支到当前分支
git merge [branch]

选择一个 commit，合并进当前分支
git cherry-pick [commit]

删除分支
git branch -d [branch-name]

## 七、查看信息

显示有变更的文件
git status

显示当前分支的版本历史、提交历史
git log

## 九、撤销

恢复某一个时段之前提交的状态到工作区
git checkout [commitId]
