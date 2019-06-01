# async-cycle 

> Map over promises serially


This is an asynchronous loop of the serializer.
Provide two methods: asyncWhile/asyncMap, the former can end the loop early and the latter cannot。
这是序列化器的异步循环。提供两种方法:asyncWhile/asyncMap，前者可以提前结束循环，而后者不能。

## Install

```
$ npm install async-cycle
```


## Usage

```js
const { asyncMap, asyncWhile } = require ('async-cycle');

const keywords = [
    'Colin Han',
    'Shealtiel Li'
];
const createPromise = async (value) => {
    return new Promise(r => {
        r(value);
    });
};

(async () => {
    await asyncWhile(keywords,async value => {
       return await createPromise(value);
    });
    //Colin Han
    
    await asyncMap(keywords,async value => {
        return await createPromise(value) ;
    });
    //['Colin Han','Shealtiel Li']
})();
```


## API

### asyncWhile(input, mapper) 

#### input

Type: `Iterable<unknown>`

Mapped over serially in the `mapper` function.

Type: `Array、Object`

Receive return value


Receive return value

### asyncMap(input, mapper)

Same as above 
