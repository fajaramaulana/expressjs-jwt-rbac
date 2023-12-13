import { DataTypes } from "sequelize";
import { sequilize } from "../../configs/sequilize";

const UserRole = sequilize.define(
  "UserRole",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    role_id: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
      references: {
        model: "Role",
        key: "role_id",
      },
      onDelete: "CASCADE",
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
      references: {
        model: "User",
        key: "user_id",
      },
      onDelete: "CASCADE",
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "user_roles",
    indexes: [
      {
        name: "user_roles_role_id_index",
        unique: false,
        method: "BTREE", // Specify the index method
        fields: ["role_id"],
        type: "NORMAL", // Specify the index type
      },
      {
        name: "user_roles_user_id_index",
        unique: false,
        method: "BTREE", // Specify the index method
        fields: ["user_id"],
        type: "NORMAL", // Specify the index type
      },
    ],
  }
);

export { UserRole };
