# CSS Grid 布局

## 知识点（属性）

  1. `display:grid`
  2. `grid-template-columns` 和 `grid-template-rows` 设置每一列的列宽和行高
    - repeat()
    - auto-fill
    - fr
    - minmax()
    - auto
    - 设置网格线名称（目前不知道有什么用）
  3. `grid-row-gap`, `grid-column-gap`, `grid-gap` 设置行间距与列间距的
  4. `grid-template-areas` 设置指定区域（目前还不清楚作用）
  5. `grid-auto-flow` 自动排列
    - row（默认值）
    - column
    - row dense 这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。
    - column dense
  6. `justify-items`, `align-items`, `place-items`
    - `justify-items` 属性设置单元格内容的水平位置（左中右），`align-items` 属性设置单元格内容的垂直位置（上中下）。
    - `place-items` 属性是 `align-items` 属性和 `justify-items` 属性的合并简写形式。
    ```CSS
      .container {
          justify-items: start | end | center | stretch;
          align-items: start | end | center | stretch;
        }
    ```
      - start：对齐单元格的起始边缘。
      - end：对齐单元格的结束边缘。
      - center：单元格内部居中。
      - stretch：拉伸，占满单元格的整个宽度（默认值）。
  7. `justify-content` , `align-content` , `place-content`
    - `justify-content` 属性是整个内容区域在容器里面的水平位置（左中右），`align-content` 属性是整个内容区域的垂直位置（上中下）。
    ```CSS
    .container {
      justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
      align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
    }
    ```
      - start - 对齐容器的起始边框。
      - end - 对齐容器的结束边框。
      - center - 容器内部居中。
      - stretch - 项目大小没有指定时，拉伸占据整个网格容器。
      - space-around - 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。
      - space-between - 项目与项目的间隔相等，项目与容器边框之间没有间隔。
      - space-evenly - 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。(所有间隔都相等)
  8. `grid-auto-columns`, `grid-auto-rows`
  `grid-auto-columns` 属性和 `grid-auto-rows` 属性用来设置，浏览器自动创建的多余网格的列宽和行高。它们的写法与 `grid-template-columns` 和 `grid-template-rows` 完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。
  9. `grid-template` 属性是 `grid-template-columns` 、`grid-template-rows` 和`grid-template-areas` 这三个属性的合并简写形式
  `grid` 属性是`grid-template-rows`、`grid-template-columns` 、`grid-template-areas` 、 `grid-auto-rows` 、`grid-auto-columns` 、`grid-auto-flow` 这六个属性的合并简写形式。
  10. `grid-column-start` 属性，`grid-column-end` 属性，`grid-row-start` 属性，`grid-row-end` 属性
    - 项目的位置是可以指定的，具体方法就是指定项目的四个边框，分别定位在哪根网格线。(之前给网格线命名可以使用在这)
      - `grid-column-start` 属性：左边框所在的垂直网格线
      - `grid-column-end` 属性：右边框所在的垂直网格线
      - `grid-row-start` 属性：上边框所在的水平网格线
      - `grid-row-end` 属性：下边框所在的水平网格线
    - `span` 关键词 表示跨越 即左右边框（上下边框）之间跨越多少个网格
    ```CSS
      .contanier{
        grid-column-start:span 2;
      }
    ```
  11. `grid-column` 属性，`grid-row` 属性
    - 是10中的属性的合并简写形式 两个数字中要加‘/’
  12. `grid-area`
    - 指定项目放在哪个区域（与上方定义区域对应）
    - 还可用作`grid-row-start`、`grid-column-start`、`grid-row-end`、`grid-column-end`的合并简写形式，直接指定项目的位置。
    ```CSS
    .item {
      grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
    }
    ```
  13. `justify-self` , `align-self` , `place-self`
    - `justify-self` 属性设置单元格内容的水平位置（左中右），跟 `justify-items` 属性的用法完全一致，但只作用于单个项目。
    - `align-self` 属性设置单元格内容的垂直位置（上中下），跟 `align-items` 属性的用法完全一致，也是只作用于单个项目。
    ```CSS
    .item {
      justify-self: start | end | center | stretch;
      align-self: start | end | center | stretch;
    }
    ```
      - start：对齐单元格的起始边缘。
      - end：对齐单元格的结束边缘。
      - center：单元格内部居中。
      - stretch：拉伸，占满单元格的整个宽度（默认值）。
