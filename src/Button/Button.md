# Buttons 按鈕

Button 用於 xxafdfsfdsfsd....

## 樣式選擇： btnStyle

```jsx
  <div>
    <Button>default</Button>
    <Button btnStyle="primary">primary</Button>
    <Button btnStyle="success">success</Button>
    <Button btnStyle="warning">warning</Button>
    <Button btnStyle="danger">danger</Button>
  </div>
```

## 類別選擇： btnType

* 方角的Button → 適用於最後確認之按鈕 例如: Apply all 、Ok、Cancel、Close...
* 有帶R角的Button (R8) → 適用於一般內文區域使用之按鈕

```js
  <div>
    <Button>default</Button>
    <Button btnType="rounded">rounded</Button>
  </div>
```

## 空心與實心按鈕： hollow

```js
  <div>
    <Button hollow={false}>default</Button>
    <Button hollow={false} btnStyle="primary">primary</Button>
    <Button hollow={false} btnStyle="success">success</Button>
    <Button hollow={false} btnStyle="warning">warning</Button>
    <Button hollow={false} btnStyle="danger">danger</Button>
  </div>
```

## 不可按狀態: disabled

```js
  <div>
    <div style={{ marginBottom: '8px' }}>
      <Button disabled>YES</Button>
      <Button disabled btnStyle="primary">YES</Button>
    </div>
    <div>
      <Button disabled btnType="rounded">YES</Button>
      <Button disabled btnType="rounded" btnStyle="primary">YES</Button>
    </div>
  </div>
```

### 滿版按鈕：

```js
  <div>
    <div style={{ marginBottom: '8px' }}>
      <Button fullWidth={true}>Full With Button</Button>
    </div>
    <div style={{ marginBottom: '8px' }}>
      <Button fullWidth={true} btnStyle="primary">Full With Button</Button>
    </div>
  </div>
```