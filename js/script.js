// 2: 历史推文获取的
// function getMaterial(url, param) {
//     // 异步对象
//     var xhr = new XMLHttpRequest();
//
//     // 设置属性
//     xhr.open('post', url);
//
//     // 如果想要使用post提交数据,必须添加此行
//     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//     let params = new URLSearchParams();
//     params.append('data', JSON.stringify(param));
//     // 将数据通过send方法传递
//     xhr.send(params);
//
//     // 发送并接受返回值
//     xhr.onreadystatechange = function () {
//         // 这步为判断服务器是否正确响应
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             loading.style.display = 'none'
//             // console.log(xhr.responseText);
//             materialData = xhr.responseText
//         }
//     };
// }

function getReadingData(article1, article2, article3) {
    return '<section style="box-sizing: border-box;font-style: normal;text-align: justify;font-size: 16px;" data-mpa-powered-by="yiban.io">\n' +
        '  <section style="font-weight: 400;box-sizing: border-box;" powered-by="xiumi.us">\n' +
        '    <section style="display: inline-block;vertical-align: top;width: 38%;box-sizing: border-box;">\n' +
        '      <section style="margin: 0.5em 0px;box-sizing: border-box;" powered-by="xiumi.us">\n' +
        '        <section style="border-top: 4px solid rgb(79, 79, 79);box-sizing: border-box;line-height: 0;">\n' +
        '          <section style="line-height: 0;width: 0px;">\n' +
        '            <svg viewBox="0 0 1 1" style="vertical-align:top;">\n' +
        '            </svg>\n' +
        '          </section>\n' +
        '        </section>\n' +
        '        <section style="margin: 3px 0px 0px;border-top: 1px solid rgb(79, 79, 79);box-sizing: border-box;line-height: 0;">\n' +
        '          <section style="line-height: 0;width: 0px;">\n' +
        '            <svg viewBox="0 0 1 1" style="vertical-align:top;">\n' +
        '            </svg>\n' +
        '          </section>\n' +
        '        </section>\n' +
        '      </section>\n' +
        '    </section>\n' +
        '    <section style="display: inline-block;vertical-align: top;width: 24%;box-sizing: border-box;">\n' +
        '      <section style="text-align: center;box-sizing: border-box;" powered-by="xiumi.us">\n' +
        '        <p style="margin: 0px;padding: 0px;box-sizing: border-box;">\n' +
        '          <strong style="box-sizing: border-box;">推荐阅读<mpchecktext contenteditable="false" id="1608193523536_0.5376098002123526">\n' +
        '            </mpchecktext></strong>\n' +
        '        </p>\n' +
        '      </section>\n' +
        '    </section>\n' +
        '    <section style="display: inline-block;vertical-align: top;width: 38%;box-sizing: border-box;">\n' +
        '      <section style="margin: 0.5em 0px;box-sizing: border-box;" powered-by="xiumi.us">\n' +
        '        <section style="border-top: 4px solid rgb(79, 79, 79);box-sizing: border-box;line-height: 0;">\n' +
        '          <section style="line-height: 0;width: 0px;">\n' +
        '            <svg viewBox="0 0 1 1" style="vertical-align:top;">\n' +
        '            </svg>\n' +
        '          </section>\n' +
        '        </section>\n' +
        '        <section style="margin: 3px 0px 0px;border-top: 1px solid rgb(79, 79, 79);box-sizing: border-box;line-height: 0;">\n' +
        '          <section style="line-height: 0;width: 0px;">\n' +
        '            <svg viewBox="0 0 1 1" style="vertical-align:top;">\n' +
        '            </svg>\n' +
        '          </section>\n' +
        '        </section>\n' +
        '      </section>\n' +
        '    </section>\n' +
        '  </section>\n' +
        '  <section style="margin: 10px 0%;box-sizing: border-box;" powered-by="xiumi.us">\n' +
        '    <section style="display: inline-block;vertical-align: top;width: 60%;padding: 0px 10px 0px 0px;box-sizing: border-box;">\n' +
        '      <section style="box-sizing: border-box;" powered-by="xiumi.us">\n' +
        '        <p style="white-space: normal;margin: 0px;padding: 0px;box-sizing: border-box;">\n' +
        '          <a target="_blank" href=' + article1.link + ' textvalue="你已选中了添加链接的内容" data-itemshowtype="0" tab="innerlink" data-linktype="2" _href=' + article1.link + '></a>\n' +
        '          <strong>​' + article1.title + '<mpchecktext contenteditable="false" id="1608193523537_0.09354184417936584">\n' +
        '            </mpchecktext></strong>\n' +
        '        </p>\n' +
        '        <p style="white-space: normal;margin: 0px;padding: 0px;box-sizing: border-box;">\n' +
        '          <br>\n' +
        '        </p>\n' +
        '      </section>\n' +
        '      <section style="font-weight: 400;margin: 10px 0% 0px;box-sizing: border-box;" powered-by="xiumi.us">\n' +
        '        <section style="font-size: 12px;box-sizing: border-box;">\n' +
        '          <p style="white-space: normal;margin: 0px;padding: 0px;box-sizing: border-box;">\n' +
        '            <a target=' + article1.link + ' data-itemshowtype="0" tab="innerlink" data-linktype="2" _href=' + article1.link + '><span style="color: rgb(2, 30, 170);">点击查看详情<mpchecktext contenteditable="false" id="1608193523538_0.008184386552784861">\n' +
        '              </mpchecktext></span></a>\n' +
        '          </p>\n' +
        '        </section>\n' +
        '      </section>\n' +
        '    </section>\n' +
        '    <section style="font-weight: 400;display: inline-block;vertical-align: top;width: 40%;box-sizing: border-box;">\n' +
        '      <section style="text-align: center;margin: 0px 0%;box-sizing: border-box;" powered-by="xiumi.us">\n' +
        '        <section style="max-width: 100%;vertical-align: middle;display: inline-block;line-height: 0;box-sizing: border-box;">\n' +
        '          <a target="_blank" href=' + article1.link + ' textvalue="你已选中了添加链接的内容" data-itemshowtype="0" tab="innerlink" data-linktype="1" _href=' + article1.link + ' style="font-size: 16px; text-align: center; white-space: normal;"><span class="js_jump_icon h5_image_link" data-positionback="static" style="inset: auto;"><img class="rich_pages" data-cropselx1="0" data-cropselx2="231" data-cropsely1="0" data-cropsely2="134" data-ratio="0.6671875" data-s="300,640" src=' + article1.cover + ' data-type="jpeg" data-w="1280" style="height: 154px; width: 231px; inset: auto;"></span></a>\n' +
        '          <mpchecktext contenteditable="false" id="1608193523539_0.9423094861290318">\n' +
        '          </mpchecktext>\n' +
        '        </section>\n' +
        '      </section>\n' +
        '    </section>\n' +
        '  </section>\n' +
        '  <section style="font-weight: 400;margin: 0.5em 0px;box-sizing: border-box;" powered-by="xiumi.us">\n' +
        '    <section style="border-top: 1px dashed rgb(207, 207, 207);box-sizing: border-box;line-height: 0;">\n' +
        '      <br>\n' +
        '    </section>\n' +
        '  </section>\n' +
        '  <section style="white-space: normal;margin: 0px;padding: 0px;box-sizing: border-box;font-style: normal;text-align: justify;font-size: 16px;" powered-by="xiumi.us">\n' +
        '    <section style="display: inline-block;vertical-align: top;width: 60%;padding: 0px 10px 0px 0px;box-sizing: border-box;">\n' +
        '      <section style="white-space: normal;margin: 0px;padding: 0px;box-sizing: border-box;font-style: normal;text-align: justify;font-size: 16px;" powered-by="xiumi.us">\n' +
        '        <a target="_blank" href=' + article2.link + ' textvalue="你已选中了添加链接的内容" data-itemshowtype="0" tab="innerlink" data-linktype="2" _href=' + article2.link + '></a>\n' +
        '        <strong><a target="_blank" href=' + article2.link + ' textvalue="你已选中了添加链接的内容" data-itemshowtype="0" tab="innerlink" data-linktype="2" style="font-size: 16px;white-space: normal;" _href=' + article2.link + '><span style="color: rgb(0, 0, 0);"><strong><span style="background-color: rgb(255, 255, 255);font-family: -apple-system-font, BlinkMacSystemFont, \'Helvetica Neue\', \'PingFang SC\', \'Hiragino Sans GB\', \'Microsoft YaHei UI\', \'Microsoft YaHei\', Arial, sans-serif;letter-spacing: 0.544px;text-align: start;"><strong style="font-size: 16px;white-space: normal;"><strong style="font-size: 16px;white-space: normal;"><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span>' + article2.title + '<mpchecktext contenteditable="false" id="1608193523540_0.03586351594514281">\n' +
        '          </mpchecktext><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span></strong></strong></span></strong></span></a></strong>\n' +
        '      </section>\n' +
        '      <section style="white-space: normal;margin: 0px;padding: 0px;box-sizing: border-box;font-style: normal;text-align: justify;font-size: 16px;" powered-by="xiumi.us">\n' +
        '        <br>\n' +
        '      </section>\n' +
        '      <section style="margin: 10px 0% 0px;box-sizing: border-box;" powered-by="xiumi.us">\n' +
        '        <section style="font-size: 12px;box-sizing: border-box;">\n' +
        '          <p style="white-space: normal;margin: 0px;padding: 0px;box-sizing: border-box;">\n' +
        '            <a target="_blank" https:="" mp="" biz="MzU2Mjc3NjIyMQ==&amp;mid=2247497135&amp;idx=1&amp;sn=c2f3921373c58b6fd96b1253e83190f1&amp;chksm=fc66e45dcb116d4b403c362433757ff5a1e7c606fbcbd0bd7bbed7cb150d9690319b13385786#rd" textvalue="点击查看详情" data-itemshowtype="0" tab="innerlink" data-linktype="2" href=' + article2.link + ' _href=' + article2.cover + '><span style="color: rgb(2, 30, 170);"></span></a>\n' +
        '            <a target="_blank" href=' + article2.link + ' textvalue="点击查看详情" data-itemshowtype="0" tab="innerlink" data-linktype="2" style="font-size: 12px;white-space: normal;" _href=' + article2.link + '><span style="color: rgb(2, 30, 170);">点击查看详情<mpchecktext contenteditable="false" id="1608193523541_0.34445019076695926">\n' +
        '              </mpchecktext></span></a>\n' +
        '          </p>\n' +
        '        </section>\n' +
        '      </section>\n' +
        '    </section>\n' +
        '    <section style="display: inline-block;vertical-align: top;width: 40%;box-sizing: border-box;">\n' +
        '      <p style="text-align: center;">\n' +
        '        <a target="_blank" href=' + article2.link + ' textvalue="你已选中了添加链接的内容" data-itemshowtype="0" tab="innerlink" data-linktype="2" _href=' + article2.link + '></a>\n' +
        '        <a target="_blank" href=' + article2.link + ' textvalue="你已选中了添加链接的内容" data-itemshowtype="0" tab="innerlink" data-linktype="1" style="font-size: 16px;text-align: center;white-space: normal;" _href=' + article2.link + '><span class="js_jump_icon h5_image_link" data-positionback="static" style="inset: auto;"><img class="rich_pages" data-cropselx1="0" data-cropselx2="231" data-cropsely1="0" data-cropsely2="134" data-ratio="0.6671875" data-s="300,640" src=' + article2.cover + ' data-type="jpeg" data-w="1280" style="height: 154px;width: 231px;inset: auto;"></span></a>\n' +
        '      </p>\n' +
        '    </section>\n' +
        '  </section>\n' +
        '<section style="font-weight: 400;margin: 0.5em 0px;box-sizing: border-box;" powered-by="xiumi.us"><section style="border-top: 1px dashed rgb(207, 207, 207);box-sizing: border-box;line-height: 0;"><section style="line-height: 0;width: 0px;"><svg viewBox="0 0 1 1" style="vertical-align:top;"></svg></section></section></section>' +
        '  <section style="white-space: normal;margin: 0px;padding: 0px;box-sizing: border-box;font-style: normal;text-align: justify;font-size: 16px;" powered-by="xiumi.us"><section style="display: inline-block;vertical-align: top;width: 60%;padding: 0px 10px 0px 0px;box-sizing: border-box;"><section style="white-space: normal;margin: 0px;padding: 0px;box-sizing: border-box;font-style: normal;text-align: justify;font-size: 16px;" powered-by="xiumi.us"><a target="_blank" href=' + article3.link + '></a><strong><a target="_blank" href=' + article3.link + ' textvalue="你已选中了添加链接的内容" data-itemshowtype="0" tab="innerlink" data-linktype="2" style="font-size: 16px;white-space: normal;" _href=' + article3.link + '><span style="color: rgb(0, 0, 0);"><strong><span style="background-color: rgb(255, 255, 255);font-family: -apple-system-font, BlinkMacSystemFont, \'Helvetica Neue\', \'PingFang SC\', \'Hiragino Sans GB\', \'Microsoft YaHei UI\', \'Microsoft YaHei\', Arial, sans-serif;letter-spacing: 0.544px;text-align: start;"><strong style="font-size: 16px;white-space: normal;"><strong style="font-size: 16px;white-space: normal;"><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span>' + article3.title + '<mpchecktext contenteditable="false" id="1608194313846_0.6001171434223393"></mpchecktext><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span><span style="display: none;line-height: 0px;">‍</span></strong></strong></span></strong></span></a></strong></section><section style="white-space: normal;margin: 0px;padding: 0px;box-sizing: border-box;font-style: normal;text-align: justify;font-size: 16px;" powered-by="xiumi.us"><br></section><section style="margin: 10px 0% 0px;box-sizing: border-box;" powered-by="xiumi.us"><section style="font-size: 12px;box-sizing: border-box;"><p style="white-space: normal;margin: 0px;padding: 0px;box-sizing: border-box;"><a target="_blank" https:="" mp="" biz="MzU2Mjc3NjIyMQ==&amp;mid=2247497135&amp;idx=1&amp;sn=c2f3921373c58b6fd96b1253e83190f1&amp;chksm=fc66e45dcb116d4b403c362433757ff5a1e7c606fbcbd0bd7bbed7cb150d9690319b13385786#rd" textvalue="点击查看详情" data-itemshowtype="0" tab="innerlink" data-linktype="2" href=' + article3.link + ' _href=' + article3.link + '><span style="color: rgb(2, 30, 170);"></span></a><a target="_blank" href=' + article3.link + ' textvalue="点击查看详情" data-itemshowtype="0" tab="innerlink" data-linktype="2" style="font-size: 12px;white-space: normal;" _href=' + article3.link + '><span style="color: rgb(2, 30, 170);">点击查看详情<mpchecktext contenteditable="false" id="1608194313847_0.7688743250362917"></mpchecktext></span></a></p></section></section></section><section style="display: inline-block;vertical-align: top;width: 40%;box-sizing: border-box;"><p style="text-align: center;"><a target="_blank" href=' + article3.link + ' textvalue="你已选中了添加链接的内容" data-itemshowtype="0" tab="innerlink" data-linktype="2" _href=' + article3.link + '></a><a target="_blank" href=' + article3.link + ' textvalue="你已选中了添加链接的内容" data-itemshowtype="0" tab="innerlink" data-linktype="1" style="font-size: 16px;text-align: center;white-space: normal;" _href=' + article3.link + '><span class="js_jump_icon h5_image_link" data-positionback="static" style="inset: auto;"><img class="rich_pages" data-cropselx1="0" data-cropselx2="231" data-cropsely1="0" data-cropsely2="134" data-ratio="0.6671875" data-s="300,640" src=' + article3.cover + ' data-type="jpeg" data-w="1280" style="height: 154px;width: 231px;inset: auto;"></span></a></p></section></section>' +
        '  <section style="font-weight: 400;margin: 0.5em 0px;box-sizing: border-box;" powered-by="xiumi.us">\n' +
        '    <section style="border-top: 1px dashed rgb(207, 207, 207);box-sizing: border-box;line-height: 0;">\n' +
        '      <section style="line-height: 0;width: 0px;">\n' +
        '        <svg viewBox="0 0 1 1" style="vertical-align:top;">\n' +
        '        </svg>\n' +
        '      </section>\n' +
        '    </section>\n' +
        '  </section>\n' +
        '</section>\n' +
        '<p>\n' +
        '  <br>\n' +
        '</p>\n' +
        '<p style="font-family: -apple-system-font, BlinkMacSystemFont, \'Helvetica Neue\', \'PingFang SC\', \'Hiragino Sans GB\', \'Microsoft YaHei UI\', \'Microsoft YaHei\', Arial, sans-serif;letter-spacing: 0.544px;white-space: normal;background-color: rgb(255, 255, 255);text-align: center;line-height: 2em;">\n' +
        '  <span style="color: rgb(0, 0, 0);font-size: 14px;letter-spacing: 0.544px;"><br></span>\n' +
        '</p>\n' +
        '<section data-mpa-template="t" style="font-family: -apple-system-font, BlinkMacSystemFont, \'Helvetica Neue\', \'PingFang SC\', \'Hiragino Sans GB\', \'Microsoft YaHei UI\', \'Microsoft YaHei\', Arial, sans-serif;letter-spacing: 0.544px;white-space: normal;font-size: 15px;background-color: rgb(240, 240, 240);">\n' +
        '  <section>\n' +
        '    <section style="text-align: center;">\n' +
        '      <section style="display: inline-block;height: 200px;vertical-align: top;overflow: scroll;">\n' +
        '        <section style="display: inline-block;vertical-align: top;background-color: rgb(244, 247, 247);">\n' +
        '          <section>\n' +
        '            <section style="display: inline-block;vertical-align: middle;width: 40.875px;">\n' +
        '              <section>\n' +
        '                <section style="margin-top: 10px;margin-bottom: 5px;line-height: 0.8;font-size: 11.2px;">\n' +
        '                  <section style="display: inline-block;border-bottom: 0.8em solid rgb(35, 146, 57);border-left: 0.7em solid transparent !important;border-right: 0.7em solid transparent !important;">\n' +
        '                    <br>\n' +
        '                  </section>\n' +
        '                </section>\n' +
        '              </section>\n' +
        '              <section>\n' +
        '                <section style="margin-top: 5px;margin-bottom: 10px;line-height: 0.8;font-size: 11.2px;">\n' +
        '                  <section style="display: inline-block;border-top: 0.8em solid rgb(35, 146, 57);border-left: 0.7em solid transparent !important;border-right: 0.7em solid transparent !important;">\n' +
        '                    <br>\n' +
        '                  </section>\n' +
        '                </section>\n' +
        '              </section>\n' +
        '            </section>\n' +
        '            <section style="display: inline-block;vertical-align: middle;text-align: left;">\n' +
        '              <p style="min-width: 1px;font-size: 14px;color: rgb(35, 146, 57);">向上滑动\n' +
        '                <mpchecktext contenteditable="false" id="1608193523542_0.9336452176809">\n' +
        '                </mpchecktext>\n' +
        '              </p>\n' +
        '            </section>\n' +
        '          </section>\n' +
        '          <section style="margin-top: 5px;margin-bottom: 5px;">\n' +
        '            <section style="line-height: 1.8;">\n' +
        '              <p style="user-select: text !important;">\n' +
        '                <br>\n' +
        '              </p>\n' +
        '              <section style="margin: 7px auto;background-color: rgb(240, 240, 240);width: auto;display: inline-block;user-select: text !important;">\n' +
        '                <section mpa-from-tpl="t" style="user-select: text !important;">\n' +
        '                  <section powered-by="xiumi.us" mpa-from-tpl="t" style="margin-top: -24px;margin-bottom: 10px;text-align: left;user-select: text !important;">\n' +
        '                    <section mpa-from-tpl="t" style="padding: 0.1em 0.3em;display: inline-block;border-width: 2px;border-style: solid;border-color: rgba(255, 255, 255, 0);color: rgb(240, 240, 240);background-color: rgb(97, 100, 104);user-select: text !important;">\n' +
        '                      <p style="user-select: text !important;">免责声明\n' +
        '                        <mpchecktext contenteditable="false" id="1608193523543_0.5222484109053052">\n' +
        '                        </mpchecktext>\n' +
        '                      </p>\n' +
        '                    </section>\n' +
        '                  </section>\n' +
        '                  <section powered-by="xiumi.us" mpa-from-tpl="t" style="user-select: text !important;">\n' +
        '                    <p style="user-select: text !important;">\n' +
        '                      <br mpa-from-tpl="t" style="font-size: 16px;user-select: text !important;">\n' +
        '                    </p>\n' +
        '                  </section>\n' +
        '                  <ol class=" list-paddingleft-2" mpa-from-tpl="t" style="width: 543.444px;">\n' +
        '                    <li>\n' +
        '                      <p style="text-indent: 0em;text-align: left;user-select: text !important;">\n' +
        '                        <span style="font-size: 14px;user-select: text !important;">本公众号内所有资源均为网上搜集或者我个人购买分享的，如果侵犯了您的版权利益，请联系通知我们（微信号：<mpchecktext contenteditable="false" id="1608193523546_0.809984866715934">\n' +
        '                          </mpchecktext>MoChen-1312；<mpchecktext contenteditable="false" id="1608193523548_0.0983556881665879">\n' +
        '                          </mpchecktext>邮箱：<mpchecktext contenteditable="false" id="1608193523547_0.5251512800775138">\n' +
        '                          </mpchecktext>1639669336@qq.com），我们在收到信息之后3日内紧急处理！<mpchecktext contenteditable="false" id="1608193523544_0.20567481130708276">\n' +
        '                          </mpchecktext>并因此给您造成的不便感到抱歉。<mpchecktext contenteditable="false" id="1608193523545_0.4515754890437893">\n' +
        '                          </mpchecktext></span>\n' +
        '                        <br mpa-from-tpl="t" style="user-select: text !important;">\n' +
        '                      </p>\n' +
        '                    </li>\n' +
        '                    <li>\n' +
        '                      <p style="text-indent: 0em;text-align: left;user-select: text !important;">\n' +
        '                        <span style="font-size: 14px;user-select: text !important;">本公众号内所有资源均为网上搜集、个人原创或者我个人购买分享，分享出来仅为了大家互相学习讨论使用，任何涉及商业盈利目的均不得使用，如若私自使用，所造成的一切法律责任将由您自己承担！<mpchecktext contenteditable="false" id="1608193523549_0.07240600037944755">\n' +
        '                          </mpchecktext>本公众号的负责人将不会付任何法律责任。<mpchecktext contenteditable="false" id="1608193523550_0.16226472062190678">\n' +
        '                          </mpchecktext></span>\n' +
        '                      </p>\n' +
        '                    </li>\n' +
        '                    <li>\n' +
        '                      <p style="text-indent: 0em;text-align: left;user-select: text !important;">\n' +
        '                        <span style="font-size: 14px;user-select: text !important;">本公众号仅为了提供一个便于学习的环境，并不对任何所发布的资源负有任何法律责任。<mpchecktext contenteditable="false" id="1608193523554_0.6187027229132818">\n' +
        '                          </mpchecktext>请在本公众号内下载资源的人在下载后24小时内删除。<mpchecktext contenteditable="false" id="1608193523555_0.10090785503180211">\n' +
        '                          </mpchecktext>如果您觉得满意，请购买正版。<mpchecktext contenteditable="false" id="1608193523556_0.9714078302935787">\n' +
        '                          </mpchecktext>谢谢合作！<mpchecktext contenteditable="false" id="1608193523551_0.06344248878079739">\n' +
        '                          </mpchecktext>！<mpchecktext contenteditable="false" id="1608193523552_0.9574351071742151">\n' +
        '                          </mpchecktext>！<mpchecktext contenteditable="false" id="1608193523553_0.9651614512314612">\n' +
        '                          </mpchecktext></span>\n' +
        '                      </p>\n' +
        '                    </li>\n' +
        '                  </ol>\n' +
        '                </section>\n' +
        '              </section>\n' +
        '            </section>\n' +
        '          </section>\n' +
        '        </section>\n' +
        '      </section>\n' +
        '    </section>\n' +
        '  </section>\n' +
        '</section>\n' +
        '<p style="color: rgb(100, 100, 100);font-size: 12px;letter-spacing: 2px;text-align: center;white-space: normal;background-color: rgb(255, 255, 255);">\n' +
        '  <br>\n' +
        '</p>\n' +
        '<p style="color: rgb(100, 100, 100);font-size: 12px;text-align: center;white-space: normal;letter-spacing: 2px;background-color: rgb(255, 255, 255);">\n' +
        '  <br>\n' +
        '</p>\n' +
        '<p style="color: rgb(100, 100, 100);font-size: 12px;text-align: center;white-space: normal;letter-spacing: 2px;background-color: rgb(255, 255, 255);">\n' +
        '  <span style="font-size: 14px;">更多资源请关注微信公众号<mpchecktext contenteditable="false" id="1608193523557_0.07395076173481718">\n' +
        '    </mpchecktext></span>\n' +
        '</p>\n' +
        '<p style="color: rgb(100, 100, 100);font-size: 12px;text-align: center;white-space: normal;letter-spacing: 2px;background-color: rgb(255, 255, 255);">\n' +
        '  <span style="font-size: 14px;">【陌尘众享】<mpchecktext contenteditable="false" id="1608193523558_0.48864979638906236">\n' +
        '    </mpchecktext></span>\n' +
        '</p>\n' +
        '<section data-mpa-template="t" mpa-from-tpl="t">\n' +
        '  <section data-mpa-category="模板" style="display: flex;justify-content: center;align-items: center;" data-mid="" mpa-from-tpl="t">\n' +
        '    <section style="margin: 0 10px;display: flex;justify-content: flex-start;align-items: center;flex-direction: column;" data-mid="" mpa-from-tpl="t">\n' +
        '      <section style="z-index: 3;width: 100%;display: flex;justify-content: flex-start;align-items: flex-start;margin-bottom: -10.5px;" data-mid="" mpa-from-tpl="t">\n' +
        '        <section style="margin-left: -10.5px;display: flex;justify-content: center;align-items: center;" data-mid="" mpa-from-tpl="t">\n' +
        '          <section style="width: 21px;height: 21px;border-radius: 10.5px;background: rgb(167, 168, 170);" data-mid="" mpa-from-tpl="t">\n' +
        '            <br>\n' +
        '          </section>\n' +
        '          <section style="margin-bottom: 21px;margin-left: 2px;width: 10px;height: 10px;border-radius: 5px;background: rgb(184, 185, 187);" data-mid="" mpa-from-tpl="t">\n' +
        '            <br>\n' +
        '          </section>\n' +
        '        </section>\n' +
        '      </section>\n' +
        '      <section style="z-index: 2;padding: 7px;background: rgb(240, 240, 240);border-radius: 5px;" data-mid="" mpa-from-tpl="t">\n' +
        '        <section style="padding: 18px;border-radius: 5px;border-width: 1px;border-style: solid;border-color: rgb(223, 223, 223);" data-mid="" mpa-from-tpl="t">\n' +
        '          <section style="width: 101px;height: 101px;display: flex;justify-content: center;align-items: center;" data-mid="" mpa-from-tpl="t">\n' +
        '            <img data-cropselx1="0" data-cropselx2="101" data-cropsely1="0" data-cropsely2="101" data-ratio="1" src="https://mmbiz.qpic.cn/mmbiz_png/HRHkghoGSqicHDQxdEXKeSYGofibBFQ7siam9eSrys6wSCNE2HsmXZyqbaeY1ww5cSpMqgfiaKOFG9rJMOZPmJmwfw/640?wx_fmt=jpeg" data-type="jpeg" data-w="480" style="width: 101px;height: 101px;">\n' +
        '          </section>\n' +
        '        </section>\n' +
        '      </section>\n' +
        '      <section style="z-index: 3;margin-top: -10.5px;display: flex;justify-content: flex-end;align-items: flex-end;width: 100%;" data-mid="" mpa-from-tpl="t">\n' +
        '        <section style="width: 30px;height: 18px;display: flex;justify-content: center;align-items: center;" data-mid="" mpa-from-tpl="t">\n' +
        '          <img data-ratio="0.8148148148148148" src="https://mmbiz.qpic.cn/mmbiz_png/aacCSHR6LyFOv2vr9gnm9IaPhwOvXyicSKlUtXlrQS3jNbTapJfib1qplRATgbDYWnsngRMWTFCSGcPqbwlp8I8g/640?wx_fmt=png" data-type="png" data-w="108">\n' +
        '        </section>\n' +
        '      </section>\n' +
        '    </section>\n' +
        '  </section>\n' +
        '</section>\n' +
        '<section powered-by="xiumi.us" mpa-from-tpl="t" style="margin-top: 10px;margin-bottom: 10px;text-align: center;white-space: normal;">\n' +
        '  <section mpa-from-tpl="t" style="display: inline-block;vertical-align: top;">\n' +
        '    <section mpa-from-tpl="t" style="display: inline-block;vertical-align: middle;">\n' +
        '      <section mpa-from-tpl="t" style="display: inline-block;vertical-align: middle;width: 15px;height: 15px;border-radius: 50%;background-color: rgb(201, 213, 227);">\n' +
        '        <br>\n' +
        '      </section>\n' +
        '      <section mpa-from-tpl="t" style="margin-left: -5px;display: inline-block;vertical-align: middle;width: 10px;height: 10px;border-radius: 50%;background-color: rgb(192, 192, 192);">\n' +
        '        <br>\n' +
        '      </section>\n' +
        '    </section>\n' +
        '    <section mpa-from-tpl="t" style="padding-right: 6px;padding-left: 6px;display: inline-block;vertical-align: middle;color: rgb(62, 62, 62);letter-spacing: 1px;">\n' +
        '      <p>\n' +
        '        <strong mpa-from-tpl="t">陌尘众享<mpchecktext contenteditable="false" id="1608193523559_0.015621831658264806">\n' +
        '          </mpchecktext></strong>\n' +
        '      </p>\n' +
        '    </section>\n' +
        '    <section mpa-from-tpl="t" style="display: inline-block;vertical-align: middle;">\n' +
        '      <section mpa-from-tpl="t" style="display: inline-block;vertical-align: middle;transform: rotate(0deg);width: 10px;height: 10px;border-radius: 50%;background-color: rgb(192, 192, 192);">\n' +
        '        <br>\n' +
        '      </section>\n' +
        '      <section mpa-from-tpl="t" style="margin-left: -5px;display: inline-block;vertical-align: middle;width: 15px;height: 15px;border-radius: 50%;background-color: rgb(201, 213, 227);">\n' +
        '        <br>\n' +
        '      </section>\n' +
        '    </section>\n' +
        '  </section>\n' +
        '</section>\n' +
        '<section powered-by="xiumi.us" mpa-from-tpl="t" style="margin-top: 10px;text-align: center;white-space: normal;">\n' +
        '  <section mpa-from-tpl="t" style="font-size: 12px;color: rgb(100, 100, 100);">\n' +
        '    <p>陌尘众享，享你所想\n' +
        '      <mpchecktext contenteditable="false" id="1608193523560_0.3300502498641351">\n' +
        '      </mpchecktext>\n' +
        '    </p>\n' +
        '    <p style="white-space: normal;color: rgb(100, 100, 100);font-size: 12px;letter-spacing: 2px;text-align: center;background-color: rgb(255, 255, 255);">\n' +
        '      <span style="font-size: 14px;"></span>\n' +
        '    </p>\n' +
        '    <p style="white-space: normal;color: rgb(100, 100, 100);font-size: 12px;letter-spacing: 2px;text-align: center;background-color: rgb(255, 255, 255);">\n' +
        '      <span style="font-size: 14px;">欢迎加入陌尘众享交流群<mpchecktext contenteditable="false" id="1608193523561_0.7156270596653413">\n' +
        '        </mpchecktext></span>\n' +
        '    </p>\n' +
        '    <p style="white-space: normal;color: rgb(100, 100, 100);font-size: 12px;letter-spacing: 2px;text-align: center;background-color: rgb(255, 255, 255);">\n' +
        '      <span style="font-size: 14px;">QQ群：<mpchecktext contenteditable="false" id="1608193523562_0.4669763542602481">\n' +
        '        </mpchecktext>149522324<mpchecktext contenteditable="false" id="1608193523563_0.3718180207497537">\n' +
        '        </mpchecktext></span>\n' +
        '    </p>\n' +
        '    <p style="white-space: normal;color: rgb(100, 100, 100);font-size: 12px;letter-spacing: 2px;text-align: center;background-color: rgb(255, 255, 255);">\n' +
        '      <span style="font-size: 14px;">微信群：<mpchecktext contenteditable="false" id="1608193523564_0.27148537949813467">\n' +
        '        </mpchecktext>MoChen-1312<mpchecktext contenteditable="false" id="1608193523565_0.7466383751250014">\n' +
        '        </mpchecktext></span>\n' +
        '    </p>\n' +
        '    <p>\n' +
        '      <br>\n' +
        '    </p>\n' +
        '  </section>\n' +
        '</section>\n' +
        '<section data-mpa-template="t" mpa-from-tpl="t" style="font-family: -apple-system-font, BlinkMacSystemFont, &quot;Helvetica Neue&quot;, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei UI&quot;, &quot;Microsoft YaHei&quot;, Arial, sans-serif; letter-spacing: 0.544px; white-space: normal; background-color: rgb(255, 255, 255);">\n' +
        '  <section data-mpa-category="模板" data-mid="" mpa-from-tpl="t" style="padding: 5px;display: flex;justify-content: flex-start;align-items: center;flex-direction: column;">\n' +
        '    <section data-mid="" mpa-from-tpl="t" style="display: flex;justify-content: center;align-items: flex-end;flex-direction: row;">\n' +
        '      <section data-mid="" mpa-from-tpl="t">\n' +
        '        <p data-mid="" style="margin-bottom: 2px;font-size: 16px;font-family: PingFangSC-Medium, \'PingFang SC\';line-height: 23px;text-align: right;">点个\n' +
        '          <span data-mid="" style="line-height: 23px;color: rgb(204, 62, 54);">“在看”</span>表示朕\n' +
        '          <mpchecktext contenteditable="false" id="1608193523566_0.7795063542114815">\n' +
        '          </mpchecktext>\n' +
        '        </p>\n' +
        '      </section>\n' +
        '      <section data-mid="" mpa-from-tpl="t" style="margin-left: 7px;display: flex;justify-content: center;align-items: center;transform: rotate(15deg);width: 44px;height: 31px;background-image: initial;background-position: initial;background-size: initial;background-repeat: initial;background-attachment: initial;background-origin: initial;background-clip: initial;border-radius: 2px;border-width: 3px;border-style: solid;border-color: rgb(221, 44, 44);">\n' +
        '        <p data-mid="" style="font-size: 16px;font-family: PingFangSC-Medium, \'PingFang SC\';color: rgb(221, 44, 44);line-height: 23px;">已阅\n' +
        '          <mpchecktext contenteditable="false" id="1608193523567_0.2407670342597601">\n' +
        '          </mpchecktext>\n' +
        '        </p>\n' +
        '      </section>\n' +
        '    </section>\n' +
        '  </section>\n' +
        '</section>\n'
}


// 【有缺点】对象数组去重 https://www.jianshu.com/p/131ca13e7f28
function unique(arr) {
    let unique = {};
    arr.forEach(function (item) {
        unique[JSON.stringify(item)] = item;//键名不会重复
    })
    arr = Object.keys(unique).map(function (u) {
        //Object.keys()返回对象的所有键值组成的数组，map方法是一个遍历方法，返回遍历结果组成的数组.将unique对象的键名还原成对象数组
        return JSON.parse(u);
    })
    return arr;
}

// function getRandom(n, m) {
//     let num1 = Math.floor(Math.random() * (m - n + 1) + n);
//     let num2 = Math.floor(Math.random() * (m - n + 1) + n);
//     let num3 = Math.floor(Math.random() * (m - n + 1) + n);
//     while (num1 === num2 || num2 === num3 || num1 === num3) {
//         num2 = Math.floor(Math.random() * (m - n + 1) + n);
//         num3 = Math.floor(Math.random() * (m - n + 1) + n);
//     }
//     return {index1: num1, index2: num2, index3: num3}
// }

function getRandom(maxNum, count){
    return array = new Array(maxNum)
        .fill(0)
        .map((v,i)=>i+1)
        .sort(()=>0.5 - Math.random())
        .filter((v,i)=>i<count);
}

function getArticleHtml(obj) {
    let imgUrl = 'http://img01.store.sogou.com/net/a/04/link?appid=100520029&url='
    // let imgUrl = ''
    return '<a target="_blank" href=' + obj.link + '><div class="article">\n' +
        '                <div class="left">\n' +
        '                    <div class="title">' + obj.title + '</div>\n' +
        '                    <div class="digest">' + obj.digest + '</div>\n' +
        '</div>\n' +
        '                <div class="right" style="background-image: url(' + imgUrl + obj.cover + ')">\n' +
        '</div></div></a>'
}

function getArticleData(materialData) {
    let indexArr = getRandom(100, 3);
    let index1 = indexArr[0]
    let index2 = indexArr[1]
    let index3 = indexArr[2]
    article1 = materialData[index1]
    article2 = materialData[index2]
    article3 = materialData[index3]
    let content = ''
    content = getArticleHtml(article1);
    content += getArticleHtml(article2);
    content += getArticleHtml(article3);
    return content;
}

function timestampToTime(timestamp) {
    let date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = date.getDate() + ' ';
    return Y + M + D;
}

// 文件里的数据和本地的数据进行比较，选择使用最新的
function showArticleData() {
    if (typeof (localStorage.historyArticlesArr_version) === 'undefined') {
        localStorage.setItem('historyArticlesArr', JSON.stringify(historyArticlesArr))
        localStorage.setItem('historyArticlesArr_version', JSON.stringify(historyArticlesArr_version))
        localStorage.setItem('historyArticlesArr_date', timestampToTime(JSON.stringify(historyArticlesArr_version)))
    } else if (historyArticlesArr_version < JSON.parse(localStorage.historyArticlesArr_version)) {
        // 文件的数据比本地旧,使用本地的数据
        materialData = JSON.parse(localStorage.historyArticlesArr);
        lastestDate = timestampToTime(JSON.parse(localStorage.historyArticlesArr_version))
    }
    showTip('⏰ 数据最新日期为：' + lastestDate, 5000)
}

// 随机生成推荐阅读文章
function getRandomRecommendArticles() {
    // if (loading.style.display === 'inline-block') {
    let articleBoxObj = document.getElementById('article_bd');
    articleBoxObj.innerHTML = getArticleData(materialData);
    let temp = '<section style="box-sizing: border-box;font-style: normal;text-align: justify;font-size: 16px;">';
    code = ipt.value.split(temp)[0] + getReadingData(article1, article2, article3);
    code = code.replaceAll('http://', 'https://')
    // }
}

/**
 * 显示提示框
 * @param warning: 提示内容
 * @param duration： 持续时间
 */
function showTip(warning, duration) {
    let tipDiv = document.createElement("div");
    tipDiv.className = 'tip';
    tipDiv.innerHTML = warning;
    tipDiv.style.animation = "notify-up " + duration / 1000 + "s cubic-bezier(0.4, 0, 0.2, 1) forwards"

    clearTimeout(timer)
    var timer = setTimeout(function () {
        tipContainer.removeChild(tipDiv);
        clearTimeout(timer)
    }, duration)
    tipContainer.appendChild(tipDiv)
}

// 更新数据时需要调整的样式
function updateStyle() {
    if (updateMenu.className === '') {
        // 菜单样式
        updateMenu.className = 'checked';
        // 隐藏
        article_bd.classList.add('hidden');
        refreshBtn.classList.add('hidden');
        copyBtn.classList.add('hidden');
        updateBtn.classList.remove('hidden');
        // 更改文字
        ipt.setAttribute('placeholder', '请粘贴公众号后台抓包数据')
    } else {
        // 菜单样式
        updateMenu.className = ''
        // 显示
        article_bd.classList.remove('hidden');
        refreshBtn.classList.remove('hidden');
        copyBtn.classList.remove('hidden');
        updateBtn.classList.add('hidden');
        // 更改文字
        ipt.setAttribute('placeholder', '请粘贴推文的html代码到此处~')
    }
}

// 对比更新的数据与本地数据
function contrastData() {
    // 获取输入框中更新的数据
    let newData = ipt.value;
    // 由JSON字符串转换为JSON对象
    if (newData !== '') newData = eval('(' + newData + ')');
    // 做一个简单的用户输入检查
    if (newData === '' || newData.constructor !== Object || newData.app_msg_list === undefined) {
        showTip("⚠️输入数据有误哦~", 3000);
        return
    }
    // 清洗数据，获取想要的列表
    let arr = newData.app_msg_list;
    // 获取最新一篇的发布日期
    // console.log(arr[0].update_time);
    // console.log(timestampToTime(arr[0].update_time));
    // 和本地的对比
    if (arr[0].update_time > JSON.parse(localStorage.historyArticlesArr_version)) {
        // 合并数组
        arr = arr.concat(materialData);
        // 数组去重
        arr = unique(arr)
        materialData = arr.slice(0, 100);
        let lastestDate = timestampToTime(JSON.stringify(arr[0].update_time))
        localStorage.setItem('historyArticlesArr', JSON.stringify(arr))
        localStorage.setItem('historyArticlesArr_version', JSON.stringify(arr[0].update_time))
        localStorage.setItem('historyArticlesArr_date', lastestDate)
        ipt.value = ''
        showTip("🎉 本地数据已更新, 最新日期为：" + lastestDate, 5000);
    } else {
        showTip("⚠️本地数据已经很新啦", 3000);
    }
}

function clickEnter(e) {
    var evt = window.event || e;
    if (evt.keyCode === 13) {
        //回车后要干的业务代码
        if (updateMenu.className === 'checked') {
            // 更新数据
            contrastData()
        } else {
            // 随机生成推荐阅读
            getRandomRecommendArticles();
        }

    }

}

let refreshBtn = document.getElementById('refresh');
let copyBtn = document.getElementById('copy');
let updateBtn = document.getElementById('update');
let changeBgBtn = document.getElementById('changeBg');
let loading = document.getElementById('loading');
let ipt = document.getElementById('ipt');
let tip = document.getElementById('tip');
let tipContainer = document.getElementById('tip-container');
let updateMenu = document.getElementById('updateDataMenu');
let article_bd = document.getElementById('article_bd');

// 页面加载自动获取推文数据
let materialData = historyArticlesArr;
let historyArticlesArr_version = materialData[0].update_time;
let lastestDate = timestampToTime(historyArticlesArr_version);

let article1 = ''
let article2 = ''
let article3 = ''
let code = ''

// 显示页面初始化时文章数据
showArticleData()

// 随机产生推荐阅读文章
refreshBtn.onclick = function () {
    getRandomRecommendArticles()
}

// 更新数据菜单按钮
updateMenu.onclick = function () {
    updateStyle();
}

// 更换背景按钮
changeBgBtn.onclick = function () {
    setTheme()
}

// 更新数据按钮
updateBtn.onclick = function () {
    contrastData()
}

// 复制到剪切板
var clipboard = new ClipboardJS('.btn.btn-bottom.copy', {
    text: function () {
        if (!code) showTip('⚠️ 请先随机生成推荐阅读文章', 3000)
        return code;
    }
});

// http://www.clipboardjs.cn/
clipboard.on('success', function (e) {
    showTip('🎉 复制成功', 3000)
});

// clipboard.on('error', function(e) {
//     showTip('⚠️ 请先随机生成推荐阅读文章', 3000)
// });
