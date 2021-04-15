CREATE TABLE entitys(

    entity_id       serial primary key,
    account_number  varchar(10) UNIQUE,
    email           varchar(100) UNIQUE,
    first_name      varchar(100) not null,
    last_name       varchar(100) not null,
    phone_number    varchar(12),
    entity_password varchar(100),
    image_path      varchar(100),
    function_role   varchar(10),
    activated       varchar(10),
    Approved        varchar(10)
);


CREATE TABLE payments(
    payments_id      serial primary key,
    account_number   varchar(10) ,
    receipt_no        varchar(20) UNIQUE,
    payment_date     date,
    payment_data_sumbit DATE ,
    payment_amount   real,
    receipt_image    varchar(100),
	 CONSTRAINT fk_accnumber
      FOREIGN KEY(account_number) 
	  REFERENCES entitys(account_number)
);


	ALTER TABLE payments
	ADD COLUMN approved VARCHAR default 'pending';