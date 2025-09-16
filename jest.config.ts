/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: {
          jsx: "react-jsx",
        },
      },
    ],
  },
  // 모듈 파일 확장자
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // 경로 별칭 매핑 - 이 부분이 중요합니다
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // 테스트 파일 패턴
  testMatch: ["**/__tests__/**/*.(ts|tsx|js)", "**/*.(test|spec).(ts|tsx|js)"],

  // 무시할 패턴
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
};

export default config;
