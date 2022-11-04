# Markdown Syntex

## 基本語法

|    語法    | 輸入                                                   |
| :--------: | :----------------------------------------------------- |
|    標題    | `# H1`<br>`## H2`<br>`### H3`                          |
|    粗體    | `**bold text**`                                        |
|    斜體    | `*italicized text*`                                    |
|    引用    | `> blockquote`                                         |
| 列表(數字) | `1. First item`<br>`2. Second item`<br>`3. Third item` |
|    列表    | `- First item`<br>`- Second item`<br>`- Third item `   |
|   分隔線   | `---`                                                  |
|   程式碼   | `` `code` `` (要打`` ` ``用兩個 ``` `` ```包一個)      |


## 進階語法

### link

**輸入**

``` md
[google](https://www.google.com/)
```

**輸出**

[Google](https://www.google.com/)

::: tip
vscode 有裝 [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=fantasy.markdown-all-in-one-for-web) 可以把字反白然後`command + v` 網址可以快速完成
:::

### 圖片

#### 基本用法

**輸入**

``` md
![Alt text](/path/to/img.jpg)
```

**輸出**

![Alt text](https://via.placeholder.com/300x200?text=image)

#### 調整大小

必須要先安裝擴充 [**markdown-it-imsize**](https://www.npmjs.com/package/markdown-it-imsize)

**輸入**

``` md
![Alt text](/path/to/img.jpg =300x300)<!-- 300px x 200px -->
![Alt text](/path/to/img.jpg =200x)<!-- 設定 width 300px -->
![Alt text](/path/to/img.jpg =x150)<!-- 設定 height 200px -->
```

**輸出**

![Stormtroopocat](https://octodex.github.com/images/homercat.png "The Homercat" =300x300)
![Stormtroopocat](https://octodex.github.com/images/heisencat.png "The Heisencat" =200x)
![Stormtroopocat](https://octodex.github.com/images/ironcat.jpg "The ironcat" =x150)

### 表格

**輸入**
``` md
| 置中  | 靠左 | 靠右 |
| :---: | :--- | ---: |
| Text  | Text | Text |
| Text  | Text | Text |
```

**輸出**
| 置中  | 靠左 | 靠右 |
| :---: | :--- | ---: |
| Text  | Text | Text |
| Text  | Text | Text |

::: tip
vscode 有裝 [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=fantasy.markdown-all-in-one-for-web) `option + shift + v` 可以快速整理格式
:::

### 程式碼區塊

我們可以用 ```` ``` ````包圍區塊

**輸入**

````md
```vue
<template>
  <Block :block="block">
    <ColorArea backgroundColor="ff0000">
      <!-- content -->
    </ColorArea>
    <ColorArea backgroundColor="00ff00">
      <!-- content -->
    </ColorArea>
  </Block>
</template>
```
````

**輸出**

```vue
<template>
  <Block :block="block">
    <ColorArea backgroundColor="ff0000">
      <!-- content -->
    </ColorArea>
    <ColorArea backgroundColor="00ff00">
      <!-- content -->
    </ColorArea>
  </Block>
</template>
```