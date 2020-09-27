import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1601188293689 implements MigrationInterface {
    name = 'Initialize1601188293689'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `post_model` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `body` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `post_model`");
    }

}
