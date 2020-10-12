import {MigrationInterface, QueryRunner} from "typeorm";

export class Init1602522967651 implements MigrationInterface {
    name = 'Init1602522967651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `urlItems` (`id` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `url` varchar(100) NOT NULL, `category` varchar(100) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `Items` (`id` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(100) NOT NULL, `price` varchar(100) NOT NULL, `fullprice` varchar(100) NOT NULL, `description` varchar(100) NOT NULL, `specification` varchar(100) NOT NULL, `urlId` varchar(36) NULL, UNIQUE INDEX `REL_49a0e8b813bda201dbcef6f9da` (`urlId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `imageItems` (`id` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(100) NOT NULL, `path` varchar(100) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `Items` ADD CONSTRAINT `FK_49a0e8b813bda201dbcef6f9da0` FOREIGN KEY (`urlId`) REFERENCES `urlItems`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Items` DROP FOREIGN KEY `FK_49a0e8b813bda201dbcef6f9da0`");
        await queryRunner.query("DROP TABLE `imageItems`");
        await queryRunner.query("DROP INDEX `REL_49a0e8b813bda201dbcef6f9da` ON `Items`");
        await queryRunner.query("DROP TABLE `Items`");
        await queryRunner.query("DROP TABLE `urlItems`");
    }

}
