import { sequelize } from "../../configs/sequelize";
import { DataTypes } from "sequelize";

const RefreshToken = sequelize.define(
  "RefreshToken",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
    token: {
      type: DataTypes.STRING,
      length: 255,
      unique: true,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "refresh_tokens",
    indexes: [
      {
        unique: true,
        fields: ["token"],
      },
      {
        name: "refresh_tokens_user_id_index",
        unique: false,
        method: "BTREE",
        fields: ["user_id"],
        type: "NORMAL",
      },
    ],
  }
);

export { RefreshToken };
