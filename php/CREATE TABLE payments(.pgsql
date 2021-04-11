CREATE TABLE payments(
    payments_id      serial primary key,
    account_number   references entitys,
    receipt_no       UNIQUE key varchar(20),
    payment_date     date,
    payment_data_sumbit DATE ,
    payment_amount   real,
    receipt_image    varchar(100)
)