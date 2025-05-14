---
nav: 场景题
order: 1
toc: content
---

## 前端如何实现截图?

<embed src="@articles/前端如何实现截图.md"></embed>

## 如何解决异步请求的竞态问题？

> 当短时内对同一个请求发送多次，不能保证按顺序返回，有可能不能按照预期显示。举个例子，分页请求，当点击第一页，然后快速点击第二页，本来预期的是页面应该显示第二页的结果
> 但是，第一页返回的速度比第二页慢，就导致了最终页面显示第一页的结果。

### 案例

```javascript
function getData(params = {}) {
  let { order = 0 } = params;
  let time = Math.ceil(Math.random() * 10) * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`order:${order}, time: ${time}`);
      resolve(order);
    }, time);
  });
}
// 测试
getData({ order: 0 });
getData({ order: 1 });
getData({ order: 2 });
```

### 解决方法

### 对请求按钮加上 loading

> 一般做法，我们会想到这个，当发送一次请求的时候，不让用户操作，直到请求返回来后，才能执行。

### 接口返回当前请求页和前端选中页对比

> 需要后端返回当前请求页，前端处理返回的页码与当前页面选中的页面对比，如果是同一页，则处理数据，反之不处理。缺点很明显，第一不通用，第二要接口界入。

### 取消请求

#### axios 中的 cancelToken（废弃）/AbortController

#### rxjs 中的 switchMap

#### XMLHttpRequest 中的 abort

#### fetch 的 AbortController

### 忽略请求

参考这个库：https://github.com/slorber/awesome-only-resolves-last-promise/
