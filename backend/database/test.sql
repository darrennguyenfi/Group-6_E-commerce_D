-- insert into account (EMAIL) values ('khoi@gmail.com')
-- insert into shipping_address (ADDR_ID, EMAIL, DIST_ID, WARD_ID, PROV_ID, DETAILED_ADDR) values 
-- 	('ADDR000001', 'khoi@gmail.com', 'DT0005', 'WD000001', 'PR01', N'225 Nguyễn Văn Cừ')
-- insert into H_ORDER (ORDER_ID, EMAIL, addr_id, PAYMENT_ID) values ('OD001', 'khoi@gmail.com', 'ADDR000001', 'PY01')
-- insert into H_ORDER (ORDER_ID, EMAIL, addr_id, PAYMENT_ID) values ('OD002', 'khoi@gmail.com', 'ADDR000001', 'PY01')
-- insert into ORDER_detail (ORDER_ID, BOOK_ID, ORDER_QUANTITY, ORDER_PRICE) values ('OD001', 'BK00001', 6, 120000)
-- insert into ORDER_detail (ORDER_ID, BOOK_ID, ORDER_QUANTITY, ORDER_PRICE) values ('OD002', 'BK00001', 6, 120000)
-- insert into order_state (ORDER_ID, ORDER_STATE) values ('OD001', 3)
-- insert into order_state (ORDER_ID, ORDER_STATE) values ('OD002', 3)

select * from H_ORDER
select * from order_detail
select * from order_state

GO
DELETE from BOOK_IMAGES where BOOK_ID = 'BK00034'
go
delete from WRITTEN_BY where BOOK_ID = 'BK00034'
go
delete from BOOK_DETAIL where BOOK_ID = 'BK00034'
go
delete from BOOK where BOOK_ID = 'BK00034'

select * from BOOK where BOOK_ID = 'BK00034'
select * from BOOK_DETAIL where BOOK_ID = 'BK00034'
select w.*, a.AUTHOR_NAME from WRITTEN_BY w join AUTHOR a on w.AUTHOR_ID = a.AUTHOR_ID where BOOK_ID = 'BK00034'
SELECT * from BOOK_IMAGES where BOOK_ID = 'BK00034'

select * from WRITTEN_BY where BOOK_ID = 'BK00034'

update BOOK set SOFT_DELETE = 0 where BOOK_ID = 'BK00034'

select * from ACCOUNT where EMAIL = 'khoiminhtrannguyen@gmail.com'
select * from ACCOUNT_DETAIL where EMAIL = 'khoiminhtrannguyen@gmail.com'
select * from HPOINT_ACCUMULATION_YEAR where EMAIL = 'khoiminhtrannguyen@gmail.com'

update ACCOUNT set HROLE = 2 where EMAIL = 'khoiminhtrannguyen@gmail.com'
update ACCOUNT_DETAIL set TIER = 2 where EMAIL = 'khoiminhtrannguyen@gmail.com'

-- ALTER TABLE ACCOUNT
-- ADD CONSTRAINT UniquePhoneNumber UNIQUE (Phone_number);

select GETDATE() as date, DATEADD(second, -1, GETDATE())
select DATEADD(second, -1, GETDATE()) as date

insert into HPOINT_HISTORY (EMAIL, CHANGED_TIME, CHANGED_POINTS, CHANGED_TYPE) values ('khoiminhtrannguyen@gmail.com', GETDATE(), 10000, 1)
insert into HPOINT_HISTORY (EMAIL, CHANGED_TIME, CHANGED_POINTS, CHANGED_TYPE) values ('khoiminhtrannguyen@gmail.com', GETDATE(), 100, -1)

select * from HPOINT_HISTORY where EMAIL = 'khoiminhtrannguyen@gmail.com' order by CHANGED_TIME desc

delete from user_voucher where VOUCHER_ID = ''

SELECT * from VOUCHER_TYPE
select * from VOUCHER
select * from user_voucher

INSERT into user_voucher (VOUCHER_ID, EMAIL) values ('VC00001', 'khoiminhtrannguyen@gmail.com')
INSERT into user_voucher (VOUCHER_ID, EMAIL) values ('VC00002', 'khoiminhtrannguyen@gmail.com')
INSERT into user_voucher (VOUCHER_ID, EMAIL) values ('VC00003', 'khoiminhtrannguyen@gmail.com')
INSERT into user_voucher (VOUCHER_ID, EMAIL) values ('VC00004', 'khoiminhtrannguyen@gmail.com')

delete from ORDER_STATE where ORDER_ID in (select ORDER_ID from H_ORDER where EMAIL = 'khoiminhtrannguyen@gmail.com')
delete from ORDER_DETAIL where ORDER_ID in (select ORDER_ID from H_ORDER where EMAIL = 'khoiminhtrannguyen@gmail.com')
delete from H_ORDER where ORDER_ID in (select ORDER_ID from H_ORDER where EMAIL = 'khoiminhtrannguyen@gmail.com')
delete from ORDER_VOUCHER where ORDER_ID in (select ORDER_ID from H_ORDER where EMAIL = 'khoiminhtrannguyen@gmail.com')

SELECT * from H_ORDER
select * from ORDER_STATE
select * from ORDER_DETAIL
select * from ORDER_VOUCHER

select *
from ACCOUNT_DETAIL
SELECT *
from HPOINT_ACCUMULATION_YEAR
SELECT [EMAIL] email, [CHANGED_TYPE] changedType, [CHANGED_TIME] changedTime, [CHANGED_POINTS],

[CHANGED_REASON] from HPOINT_HISTORY

select * from ORDER_REVIEW

delete from ORDER_REVIEW

