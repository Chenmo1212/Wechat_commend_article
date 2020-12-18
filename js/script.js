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
    return '<a target="_blank" href=' + obj.link + '><div class="article">\n' +
        '                <div class="left">\n' +
        '                    <div class="title">' + obj.title + '</div>\n' +
        '                    <div class="digest">' + obj.digest + '</div>\n' +
        '</div>\n' +
        '                <div class="right" style="background-image: url(' + imgUrl + obj.cover + ')">\n' +
        '</div></div></a>'
}

function getArticleData(materialData) {
    let indexArr = getRandom(0, 99);
    let index1 = indexArr.index1
    let index2 = indexArr.index2
    let index3 = indexArr.index3
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
    tip.className = 'tip rightIn'
    tip.innerHTML = warning
    clearTimeout(timer)
    var timer = setTimeout(function () {
        tip.classList.add('rightOut')
        clearTimeout(timer)
    }, duration)
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
    newData = eval('(' + newData + ')');
    // 做一个简单的用户输入检查
    if (newData.constructor !== Object || newData.app_msg_list === undefined) {
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
        materialData = arr;
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

let refreshBtn = document.getElementById('refresh');
let copyBtn = document.getElementById('copy');
let updateBtn = document.getElementById('update');
let loading = document.getElementById('loading');
let ipt = document.getElementById('ipt');
let tip = document.getElementById('tip');
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

// 更新数据按钮
updateBtn.onclick = function () {
    contrastData()
}

// 复制到剪切板
var clipboard = new ClipboardJS('.btn.btn-bottom', {
    text: function () {
        return code;
    }
});

clipboard.on('success', function (e) {
    showTip('🎉 复制成功', 3000)
    // console.log('ssss')
    // console.info('Action:', e.action);
    // console.info('Text:', e.text);
    // console.info('Trigger:', e.trigger);
    // e.clearSelection();
});
