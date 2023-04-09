import express from 'express';
import mongoose from 'mongoose';

const app = express();

const db = mongoose;
db.connect(process.env['MONGO_URI'], { useNewUrlParser: true, useUnifiedTopology: true });

// Define the schema for a user
const userSchema = new db.Schema({
  name: String,
  email: String,
  imageUrl: String,
});

// Define the schema for a navigation item
const navigationSchema = new db.Schema({
  name: String,
  href: String,
  current: Boolean,
});

// Define the schema for a user navigation item
const userNavigationSchema = new db.Schema({
  name: String,
  href: String,
});

// Define the schema for a statistic
const statsSchema = new db.Schema({
  label: String,
  value: Number,
});

// Define the schema for an action
const actionsSchema = new db.Schema({
  icon: String,
  name: String,
  href: String,
  iconForeground: String,
  iconBackground: String,
  description: String,
});

// Define the schema for an announcement
const announcementsSchema = new db.Schema({
  id: Number,
  title: String,
  href: String,
  preview: String,
});

// Create models for each schema
const UserModel = db.model("User", userSchema);
const NavigationModel = db.model("Navigation", navigationSchema);
const UserNavigationModel = db.model("UserNavigation", userNavigationSchema);
const StatsModel = db.model("Stats", statsSchema);
const ActionsModel = db.model("Actions", actionsSchema);
const AnnouncementsModel = db.model("Announcements", announcementsSchema);

// Export the models
module.exports = {
  User: UserModel,
  Navigation: NavigationModel,
  UserNavigation: UserNavigationModel,
  Stats: StatsModel,
  Actions: ActionsModel,
  Announcements: AnnouncementsModel,
};