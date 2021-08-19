import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCompliments1629409436560 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable{
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_sender",
                        type: "uuid",
                    },
                    {
                        name: "user_receiver",
                        type: "uuid"
                    },
                    {
                        name: "tag_id",
                        type: "uuid",
                    }
                ]
            })
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
