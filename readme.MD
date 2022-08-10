# 무한 스크롤 연습

### Intersection_Observer_API

- viewport의 경계가 target의 threshold를 지날 때마다 callback를 실행하는 Web API

```js
let io = new IntersectionObserver(callback, {
  root: document.querySelector("#scrollArea"), // viewport의 역할을 하는 element, 기본값은 viewport
  rootMargin: "0px",
  threshold: 1.0,
});

observer.observe(target); // target 요소의 threshold를 지나면 callback 실행

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
```

참고: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#a_simple_example
