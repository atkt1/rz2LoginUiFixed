# ReviewZone Database Schema

## Enums

### boolean_enum
- Yes
- No

### frequency
- Yearly
- Monthly

### marketplace
- Amazon
- Flipkart

### package_insert_style_size
- Basic (4" X 6")
- Basic (3.5" X 8.5")
- Standard (4" X 6")
- Standard (3.5" X 8.5")

### plan_name
- Enterprise
- Starter
- Professional

### survey_status
- ACTIVE
- PAUSED

### survey_style
- WithInfo
- Simple

### voucher_status
- Consumed
- Available

## Tables

### users
- id (integer, primary key)
- email (varchar, not null)
- username (varchar, not null)
- password_hash (text, not null)
- refresh_token (text)
- role (varchar)
- is_active (boolean)
- is_verified (boolean)
- metadata (jsonb)
- created_at (timestamp)
- updated_at (timestamp)
- last_login (timestamp)
- References plans(id)

### plans
- id (integer, primary key)
- name (plan_name enum, not null)
- amount_paid (integer)
- current_reviews_count (integer)
- max_review_count (integer)
- plan_frequency (frequency enum)

### surveys
- id (integer, primary key)
- survey_name (varchar)
- survey_status (survey_status enum)
- survey_style (survey_style enum)
- marketplace_review_required (boolean)
- minimum_review_length (integer)
- minimum_star_rating (integer)
- time_delay (integer)
- url (varchar)
- qr_code (text)
- created_at (timestamp)
- References users(id)

### reviews
- id (integer, primary key)
- first_name (varchar)
- last_name (varchar)
- email_id (varchar)
- rating (integer)
- review (text)
- order_id (integer)
- date (timestamp)
- References surveys(id)
- References users(id)

### products
- id (integer, primary key)
- name (varchar)
- product_id (integer)
- marketplace (marketplace enum)
- image (text)
- References users(id)
- References surveys(id)
- References logos(id)

### package_inserts
- id (integer, primary key)
- name (varchar)
- headline (varchar)
- subtitle (varchar)
- brand_url (varchar)
- background_color (varchar)
- style_size (package_insert_style_size enum)
- created_at (timestamp)
- References users(id)
- References surveys(id)

### logos
- id (integer, primary key)
- image (text)

### orders
- id (integer, primary key)
- order_id (varchar)
- marketplace (marketplace enum)
- References users(id)

### coupons
- id (integer, primary key)
- voucher_code (varchar)
- available_count (integer)
- References users(id)

### vouchers
- id (integer, primary key)
- coupon_code (varchar)
- status (voucher_status enum)
- References users(id)

### survey_backgrounds
- id (integer, primary key)
- image (text)