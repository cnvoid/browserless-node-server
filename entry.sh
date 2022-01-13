#/bin/bash

echo '入口 entry.sh 执行..'

echo `nohup node /app/app.js >> /dev/null 2>&1 &`

echo '执行服务脚本'

echo `nohup $(cd /usr/src/app && ./start.sh) >> /dev/null 2>&1 &`

echo '入口完成'