const express = require("express");
const router = express.Router();
let sc = require("./shotcut")

/**
 * @api {post} /shotcut/get 网页截屏服务
 * @apiName 获取网页截图
 * @apiGroup 网页数据爬取服务
 * @apiParam {String} url [必填]需要截取的页面地址
 * @apiParam {Boolean} isMark [默认false]是否需要水印
 * @apiParam {String} encoding [默认base64] 流编码格式，可选[base64，binary]
 * @apiParam {number} wait [默认20] 等待时长， 默认20秒
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        code: 0, 
 *        data: "data:image/png;base64,.......=",
 *        msg: '成功'
 *      }
 */
router.post("/get", async (req, res) => {
  // console.log('sess', req.session)
  let { url, isMark, encoding, wait } = req.body
  // console.log('参数：', req)

  if (!url) {
    res.json({ code: 1001, data: '失败', msg: '必须有url' });
    return false;
  }

  try{
    sc.shotcut(url, {isMark, encoding, wait}, (imgStr) => {
      // res.set('Content-Type', 'image/png')
      // res.send(imgStr);
      console.log('截屏成功')
      res.json({ code:0, data:imgStr, msg:'成功'})
    })
  }catch(e){
    console.log('错误：', e)
  }

  // req.session.loginData = resp

  // console.log('登录》》》》', resp, header)
  // res.json({code: 0, data: resp, msg: '成功'});
})



module.exports = router;