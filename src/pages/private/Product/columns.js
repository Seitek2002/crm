export default [
    {
        name: 'name',
        required: true,
        label: 'Наименование товара',
        align: 'left',
        field: row => row.name,
        format: val => `${val}`,
        sortable: true,
    },
    {
        required: true,
        name: 'description',
        align: 'left',
        label: 'Описание',
        field: 'description',
    },
    {
        required: true,
        name: 'country',
        align: 'left',
        label: 'Страна',
        field: 'country',
        type: 'select',
        options: [
            {
                label: 'Кыргызстан',
                value: 'Кыргызстан'
            },
            {
                label: 'Россия',
                value: 'Россия'
            },
            {
                label: 'Германия',
                value: 'Германия'
            },
            {
                label: 'Китай',
                value: 'Китай'
            },
            {
                label: 'Корея',
                value: 'Корея'
            },
        ]
    },
    {
        required: true,
        name: 'group',
        align: 'left',
        label: 'Группы',
        field: 'group',
        type: 'select',
        options: [
            {
                label: 'Лекарство',
                value: 'Лекарство',
            },
            {
                label: 'Оборудование',
                value: 'Оборудование',
            },
        ]
    },
    {
        required: true,
        name: 'supplier',
        align: 'left',
        label: 'Поставщик',
        field: 'supplier',
        type: 'select',
        options: [
            {
                label: 'ОсОО Рус',
                value: 'ОсОО Рус'
            },
            {
                label: 'ОсОО Метанин',
                value: 'ОсОО Метанин'
            },
            {
                label: 'iBon',
                value: 'iBon'
            },
        ]
    },
    {
        required: true,
        name: 'weight',
        align: 'left',
        label: 'Единица измерения',
        field: 'weight',
        type: 'select',
        options: [
            {
                label: '11',
                value: 11
            }
        ]
    },
    // {
    //     required: true,
    //     name: 'article',
    //     align: 'left',
    //     label: 'Артикул',
    //     field: 'article',
    // },
    // {
    //     required: true,
    //     name: 'code',
    //     align: 'left',
    //     label: 'Код',
    //     field: 'code',
    // },
    // {
    //     required: true,
    //     name: 'external_code',
    //     align: 'left',
    //     label: 'Внешний код',
    //     field: 'external_code',
    // },
    // {
    //     required: true,
    //     name: 'weight',
    //     align: 'left',
    //     label: 'Вес',
    //     field: 'weight',
    // },
    // {
    //     required: true,
    //     name: 'volume',
    //     align: 'left',
    //     label: 'Объем',
    //     field: 'volume',
    // },
    {
        required: true,
        name: 'barcode_name',
        align: 'left',
        label: 'НДС',
        field: 'barcode_name',
        type: 'select',
        options: [
            {
                label: '11%',
                value: '11%',
            },
            {
                label: '12%',
                value: '12%',
            },
        ]
    },
    {
        required: true,
        name: 'accounting',
        align: 'left',
        label: 'Особенности учета',
        field: 'accounting',
        type: 'select',
        options: [
            {
                label: '1',
                value: '1',
            },
        ]
    },
    // {
    //     required: true,
    //     name: 'barcode_name',
    //     align: 'left',
    //     label: 'Штрихкод имя',
    //     field: 'barcode_name',
    // },
    // {
    //     required: true,
    //     name: 'barcode',
    //     align: 'left',
    //     label: 'Штрихкод',
    //     field: 'barcode',
    // },
    {
        required: true,
        name: 'barcode',
        align: 'left',
        label: 'Система налогообложения',
        field: 'barcode',
        type: 'select',
        options: [
            {
                label: 'Совпадает с группой',
                value: 'Совпадает с группой',
            },
            {
                label: 'ОСН',
                value: 'ОСН',
            },
            {
                label: 'УСН. Доход',
                value: 'УСН. Доход',
            },
            {
                label: 'УСН. Доход-Разбор',
                value: 'УСН. Доход-Разбор',
            },
            {
                label: 'ЕСХН',
                value: 'ЕСХН',
            },
            {
                label: 'ЕНВД',
                value: 'ЕНВД',
            },
            {
                label: 'Патент',
                value: 'Патент',
            },
        ]
    },
    {
        required: true,
        name: 'calculation',
        align: 'left',
        label: 'Признак предмета расчета',
        field: 'calculation',
        type: 'select',
        options: [
            {
                label: 'Совпадает с точкой',
                value: 'Совпадает с точкой',
            },
            {
                label: 'Подакцизный товар',
                value: 'Подакцизный товар',
            },
            {
                label: 'Товар',
                value: 'Товар',
            },
            {
                label: 'Подакцизный товар',
                value: 'Подакцизный товар',
            },
            {
                label: 'Составной предмет расчета',
                value: 'Составной предмет расчета',
            },
            {
                label: 'Иной предмет расчета',
                value: 'Иной предмет расчета',
            },
        ]
    },
    {
        required: true,
        name: 'division',
        align: 'left',
        label: 'Отдел',
        field: 'division',
        type: 'select',
        options: [
            {
                label: '123',
                value: '123',
            },
        ]
    },
    // {
    //     required: true,
    //     name: 'unit',
    //     align: 'left',
    //     label: 'Юнит',
    //     field: 'unit',
    // },
    // {
    //     required: true,
    //     name: 'department',
    //     align: 'left',
    //     label: 'Департамент',
    //     field: 'department',
    // },
    // {
    //     required: true,
    //     name: 'vat',
    //     align: 'left',
    //     label: 'ВАТ',
    //     field: 'var',
    // },
    // {
    //     required: true,
    //     name: 'accountingFeatures',
    //     align: 'left',
    //     label: 'Особенности учета',
    //     field: 'accountingFeatures',
    // },
    // {
    //     required: true,
    //     name: 'payment_attribute',
    //     align: 'left',
    //     label: 'Платеж',
    //     field: 'payment_attribute',
    // },

    // {
    //     name: 'cash_receipt',
    //     align: 'left',
    //     label: 'Квитанция об оплате',
    //     field: 'cash_receipt',
    // },
    // {
    //     name: 'min_price',
    //     align: 'left',
    //     label: 'Минимальная цена',
    //     field: 'min_price',
    // },
    // {
    //     name: 'purchase_price',
    //     align: 'left',
    //     label: 'Цена покупки',
    //     field: 'purchase_price',
    // },
    // {
    //     name: 'selling_price',
    //     align: 'left',
    //     label: 'Цена продажи',
    //     field: 'selling_price',
    // },
    // {
    //     name: 'allow_discount',
    //     align: 'left',
    //     label: 'Дисконт',
    //     field: 'allow_discount',
    // },
];
