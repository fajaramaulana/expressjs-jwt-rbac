import { DataTypes } from "sequelize";
import { sequelize } from "../../configs/sequelize";

const RolePermission = sequelize.define(
  "RolePermission",
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
    permission_id: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
      references: {
        model: "Permission",
        key: "permission_id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "role_permissions",
    indexes: [
      {
        name: "role_permissions_role_id_index",
        unique: false,
        method: "BTREE", // Specify the index method
        fields: ["role_id"],
        type: "NORMAL", // Specify the index type
      },
      {
        name: "role_permissions_permission_id_index",
        unique: false,
        method: "BTREE", // Specify the index method
        fields: ["permission_id"],
        type: "NORMAL", // Specify the index type
      },
    ],
  }
);
