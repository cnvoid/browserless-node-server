define({ "api": [
  {
    "type": "post",
    "url": "/shotcut/get",
    "title": "网页截屏服务",
    "name": "获取网页截图",
    "group": "网页数据爬取服务",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>[必填]需要截取的页面地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isMark",
            "description": "<p>[默认false]是否需要水印</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "encoding",
            "description": "<p>[默认base64] 流编码格式，可选[base64，binary]</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "wait",
            "description": "<p>[默认20] 等待时长， 默认20秒</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   code: 0, \n   data: \"data:image/png;base64,.......=\",\n   msg: '成功'\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/route.js",
    "groupTitle": "网页数据爬取服务"
  }
] });
