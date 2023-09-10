# yaml base
## syntax
- 使用缩进表示层级关系
- 缩进的空格数不重要，只要相同层级的元素左对齐即可
- #表示注释

## 基本数据类型
- 纯量

  纯量是基本的、不可再分的值。包括：字符串、布尔值、整数、浮点数、Null、时间、日期
  ```yaml
  name: redis
  version: 5.6
  port: 6379
  stdin: true
  image: ~ # null 空值
  # date and time format: ISO 8601
  date: 2023-09-09
  time: 2023-09-09T10:46:01+08:00 # dateTtime+timezone
  singleLineString: >
    this is a very long
    string
  # "this is a very long string"
  multiLineString: |
    this is a very long
    string
  # "this is a very long\nstring"
  ```
- 数组
  ```yaml
  ports: 
    - 6379
    - 6380
  ports: [6379, 6380]
  ```
- 对象
 ```yaml
  container: 
    name: mysql
    port: 8806
    version: 8.0
  ```
