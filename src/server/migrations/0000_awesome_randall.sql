CREATE TABLE `content` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`data` text,
	`created_at` text DEFAULT (current_timestamp) NOT NULL,
	`updated_at` text DEFAULT (current_timestamp) NOT NULL
);
