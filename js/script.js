
// 2: 历史推文获取的
function getMaterial(url, param) {
    // 异步对象
    var xhr = new XMLHttpRequest();

    // 设置属性
    xhr.open('post', url);

    // 如果想要使用post提交数据,必须添加此行
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let params = new URLSearchParams();
    params.append('data', JSON.stringify(param));
    // 将数据通过send方法传递
    xhr.send(params);

    // 发送并接受返回值
    xhr.onreadystatechange = function () {
        // 这步为判断服务器是否正确响应
        if (xhr.readyState === 4 && xhr.status === 200) {
            loading.style.display = 'none'
            // console.log(xhr.responseText);
            materialData = xhr.responseText
        }
    };
}

function getRandom(n, m) {
    let num1 = Math.floor(Math.random() * (m - n + 1) + n);
    let num2 = Math.floor(Math.random() * (m - n + 1) + n);
    let num3 = Math.floor(Math.random() * (m - n + 1) + n);
    while (num1 === num2 || num2 === num3 || num1 === num3) {
        num2 = Math.floor(Math.random() * (m - n + 1) + n);
        num3 = Math.floor(Math.random() * (m - n + 1) + n);
    }
    return {index1: num1, index2: num2, index3: num3}
}

function getArticleHtml(obj) {
    // let imgUrl = 'http://img01.store.sogou.com/net/a/04/link?appid=100520029&url='
    let imgUrl = ''
    let str = '<a target="_blank" href=' + obj.url + '><div class="article">\n' +
        '                <div class="left">\n' +
        '                    <div class="title">' + obj.title + '</div>\n' +
        '                    <div class="digest">' + obj.digest + '</div>\n' +
        '</div>\n' +
        '                <div class="right" style="background-image: url(' + imgUrl + obj.cover + ')">\n' +
        '</div></div></a>'
    return str
}

function getArticleData(materialData) {
    let indexArr = getRandom(0, 19);
    let index1 = indexArr.index1
    let index2 = indexArr.index2
    let index3 = indexArr.index3
    // materialData = JSON.parse(materialData)
    // 1: 素材库获取的
    // article1 = materialData.material.item[index1].content.news_item[0];
    // article2 = materialData.material.item[index2].content.news_item[0];
    // 2: 历史推文获取的
    article1 = materialData[index1]
    article2 = materialData[index2]
    article3 = materialData[index3]
    let content = ''
    content = getArticleHtml(article1);
    content += getArticleHtml(article2);
    content += getArticleHtml(article3);
    console.log(article1)
    return content;
}

// 页面加载自动获取推文数据
// 1: 素材库获取的
// let materialData = null;
// 2: 历史推文获取的
let materialData = historyArticlesArr;

let article1 = ''
let article2 = ''
let article3 = ''
let code = ''

// 2: 历史推文获取的
// let param = {"type": "news", "offset": 0, "count": 20};
// param.sign = CryptoJS.MD5(JSON.stringify(param).replace(/\"/g, "'")).toString().toUpperCase()
// let url = 'https://mp.chenmo1212.cn/wxapi/wxpy/material'
// getMaterial(url, param)

let refreshBtn = document.getElementById('refresh');
let loading = document.getElementById('loading');
let ipt = document.getElementById('ipt');
let tip = document.getElementById('tip');

// 随机产生推荐阅读文章
refreshBtn.onclick = function () {
    // if (loading.style.display === 'inline-block') {
    let articleBoxObj = document.getElementById('article_bd');
    articleBoxObj.innerHTML = getArticleData(materialData);
    let temp = '<section style="box-sizing: border-box;font-style: normal;text-align: justify;font-size: 16px;">';
    code = ipt.value.split(temp)[0] + getReadingData(article1, article2, article3);
    code = code.replaceAll('http://', 'https://')
    // }
}

// 复制到剪切板
var clipboard = new ClipboardJS('.btn.btn-bottom', {
    text: function () {
        return code;
    }
});

clipboard.on('success', function (e) {
    let timer1 = null;
    let timer2 = null;
    tip.className = 'tip rightIn'
    clearTimeout(timer1)
    clearTimeout(timer2)
    timer1 = setTimeout(function (){
        tip.className = 'tip rightOut'
        clearTimeout(timer1)
        timer2 = setTimeout(function (){
            tip.className = 'tip'
            clearTimeout(timer2)
        }, 1000)
    }, 3000)
    // console.log('ssss')
    // console.info('Action:', e.action);
    // console.info('Text:', e.text);
    // console.info('Trigger:', e.trigger);
    // e.clearSelection();
});
