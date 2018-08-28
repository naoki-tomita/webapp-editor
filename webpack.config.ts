import { Configuration } from "webpack";
import * as path from "path";

const config: Configuration = {
  entry: [ "./src/scripts/index.tsx" ],
  devtool: "inline-source-map",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      }
    ],
  },
};

export default config;