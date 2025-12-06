# Typescript ile React Yazarken

## Dosya Uzantısı
- `jsx` dosyası yerine `tsx` kullanılır
- `js` dosyası yerine `ts` kullanılır

## Önemli
- Tipi tanımlanabilen her değişkenin / fonksiyonun / parametrenin / component'In mutlaka ve mutlaka tipi tanımlanmalı
- Otomatik tip algılama özelliği mümkünse hiç kullanılamamalı.

## Hooks
- React hook'larını kullanırken bir veri tutuyorsa mutlaka tip tanımlanmalı (useState, useReducer, useContext, useRef, etc.).

## Element Tipi
- Her jsx elementinin kendine has bir tipi bulunur.
- Çok fazla element olduğundan type'lerin unutlmaması için hep aynı syntax kullanılır.
- `HTML[Etiket Rolü | Etiket İsmi]Element`
- button: `HTMLButtonElement`
- input: `HTMLInputElement`
- form: `HTMLFormElement`
- h1: `HTMLHeadingElement`
- div: `HTMLDivElement`

## Component Tipi
- React'ta en sık kullandığımız yapılar olan component'lar birer fonksiyondur.
- Fonksiyon tipi tanımlarken iki şeyin tipi mutlaka tanımlarız:
- - parametre: component'ın hangi tipte prop aldığını tanımlarız
- - dönüş tipi: jsx elementi return ediceği için bunu tipinide tanımlarız

## Import
- Component / Function / Değişken importlarından farklı olarak bir tipi / interface'i import ederken import ifadesinin hemen sonrasına `type` yazmak gerekiyor.
- `import type { IProps } from "./button"`

## Event Tipi
- onClick / onChange / onSubmit gibi olaylarda çalıştırdığımız fonksionlarta olay verisi içeren event parametresi gider.
- event parametresinin değerlerine erişmek için tipinin tanımlanması gerekiyor.

- her olayın kend tipi vardır.
- - onClick: `MouseEvent`
- - onChange: `ChangeEvent`
- - onSubmit: `FormEvent`

- event tipleri olayın hangi elementte gerçekleştiğini generic olarak alır.
- - `ChangeEvent<HTMLInputElement>`
- - `MouseEvent<HTMLButtonElement>`
- - `FormEvent<HTMLFormElement>`