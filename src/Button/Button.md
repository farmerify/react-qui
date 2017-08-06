### 兩種 Button 類型：

* 方角的Button → 適用於最後確認之按鈕 例如: Apply all 、Ok、Cancel、Close...
* 預設為此類型按鈕

```js
  <div>
    <Button onClick={() => console.log('you click')}>YES</Button>
    <Button btnStyle="primary">YES</Button>
    <Button btnStyle="warning">YES</Button>
    <Button btnStyle="success">YES</Button>
    <Button btnStyle="danger">YES</Button>
  </div>
```

* 有帶R角的Button (R8) → 適用於一般內文區域使用之按鈕

```js
  <div>
    <Button btnType="rounded">YES</Button>
    <Button btnType="rounded" btnStyle="primary">YES</Button>
    <Button btnType="rounded" btnStyle="warning">YES</Button>
    <Button btnType="rounded" btnStyle="success">YES</Button>
    <Button btnType="rounded" btnStyle="danger">YES</Button>
  </div>
```

### 不可按狀態(disabled):

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