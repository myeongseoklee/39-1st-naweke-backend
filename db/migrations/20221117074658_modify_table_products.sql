-- migrate:up
ALTER TABLE `products` ADD `desc` varchar(255) NOT NULL AFTER `name`;
ALTER TABLE `products` MODIFY `gender_id` INT

-- migrate:down

