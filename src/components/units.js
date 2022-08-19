// 时间戳转换
export function timestampToTime(timestamp) {
  const date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear() + '-';
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
  const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return Y + M + D + h + m + s;
}

// 数字转换成千分符
export function numberThousand(num) {
  return Number(num).toLocaleString();
}

// 拼音排序
export function pinyinSort(array, key) {
  const resultArray = array.sort(function compareFunction(param1, param2) {
    if (!param1[key]) {
      return false;
    }
    return param1[key].localeCompare(param2[key], 'zh');
  });
  return resultArray;
}

// 深拷贝
export function deepCopy(obj) {
  if (typeof obj !== 'object') return;
  let newObj = obj instanceof Array ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}

// 防抖
// 防抖: n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时
export function debounce(fn, delay) {
  let timer = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
}

// 数组去重
