@echo off
set dirName=%1
set folderName=%2
set path="./src/assets/%dirName%/%folderName%"

mkdir %path%-100px %path% %path%-500px