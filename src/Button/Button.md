A generic QUI button below with required `label` props:

```js
  <div>
    <Button btnType="rounded" label="確認" type="submit" />
    <Button  label="確認" disabled />
    <Button  label="確認" />
  </div>
```

兩種 Button 類型：
1. 有帶R角的Button (R8) → 適用於一般內文區域使用之按鈕
2. 方角的Button→ 適用於最後確認之按鈕 例如: Apply all 、Ok、Cancel、Close...