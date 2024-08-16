import { assertEquals } from "@std/assert";
import {
  camelToSnake,
  snakeToCamel,
  camelToPascal,
  pascalToCamel,
  camelToKebab,
  kebabToCamel,
  camelToUpperSnake,
  upperSnakeToCamel,
  toLowerCase,
  toUpperCase,
  camelToTitle,
  toSentenceCase,
  camelToDotNotation,
  dotNotationToCamel
} from './main.ts';

Deno.test("camelToSnake", () => {
  assertEquals(camelToSnake("helloWorld"), "hello_world");
});

Deno.test("snakeToCamel", () => {
  assertEquals(snakeToCamel("hello_world"), "helloWorld");
});

Deno.test("camelToPascal", () => {
  assertEquals(camelToPascal("helloWorld"), "HelloWorld");
});

Deno.test("pascalToCamel", () => {
  assertEquals(pascalToCamel("HelloWorld"), "helloWorld");
});

Deno.test("camelToKebab", () => {
  assertEquals(camelToKebab("helloWorld"), "hello-world");
});

Deno.test("kebabToCamel", () => {
  assertEquals(kebabToCamel("hello-world"), "helloWorld");
});

Deno.test("camelToUpperSnake", () => {
  assertEquals(camelToUpperSnake("helloWorld"), "HELLO_WORLD");
});

Deno.test("upperSnakeToCamel", () => {
  assertEquals(upperSnakeToCamel("HELLO_WORLD"), "helloWorld");
});

Deno.test("toLowerCase", () => {
  assertEquals(toLowerCase("Hello World"), "hello world");
});

Deno.test("toUpperCase", () => {
  assertEquals(toUpperCase("Hello World"), "HELLO WORLD");
});

Deno.test("camelToTitle", () => {
  assertEquals(camelToTitle("helloWorld"), "Hello World");
});

Deno.test("toSentenceCase", () => {
  assertEquals(toSentenceCase("hello world"), "Hello world");
});

Deno.test("camelToDotNotation", () => {
  assertEquals(camelToDotNotation("helloWorld"), "hello.world");
});

Deno.test("dotNotationToCamel", () => {
  assertEquals(dotNotationToCamel("hello.world"), "helloWorld");
});