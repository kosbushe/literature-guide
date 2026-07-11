import assert from "node:assert/strict";
import fs from "node:fs";

const read = (path) => JSON.parse(fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8"));
const author = read("content/authors/leo-tolstoy/core.json");
const authorRu = read("content/authors/leo-tolstoy/locales/ru.json");
const work = read("content/works/after-the-ball/core.json");
const workRu = read("content/works/after-the-ball/locales/ru.json");
const sources = read("content/sources/sources.json");
const curriculum = fs.readFileSync(new URL("../lib/curriculum.ts", import.meta.url), "utf8");

const requiredPassportIds = [
  "who", "peer_age", "growing_up", "world_around", "inner_conflict",
  "surprising_facts", "why_this_work", "before_reading", "notice", "after_reading"
];

assert.equal(author.id, "leo-tolstoy");
assert.equal(work.authorId, author.id);
assert.deepEqual(authorRu.passport.map((block) => block.id), requiredPassportIds);
assert.equal(work.targetAge.grade, 8);
assert.ok(workRu.before.terms.length >= 4);
assert.ok(workRu.during.length >= 3);

const sourceIds = new Set(sources.map((source) => source.id));
for (const sourceId of [...author.sourceIds, ...work.sourceIds]) {
  assert.ok(sourceIds.has(sourceId), `Missing source: ${sourceId}`);
}
for (const block of authorRu.passport) {
  assert.ok(block.sourceIds?.length, `Passport block has no source: ${block.id}`);
  for (const sourceId of block.sourceIds) assert.ok(sourceIds.has(sourceId), `Missing source: ${sourceId}`);
}

const fifthGradeBlock = curriculum.match(/grade: 5,[\s\S]*?authors:/)?.[0] ?? "";
assert.equal((fifthGradeBlock.match(/ready: true/g) ?? []).length, 9, "Fifth grade must have nine ready first-season routes");
const sixthGradeBlock = curriculum.match(/grade: 6,[\s\S]*?authors:/)?.[0] ?? "";
assert.equal((sixthGradeBlock.match(/ready: true/g) ?? []).length, 12, "Sixth grade must have twelve ready routes");
for (const grade of [7, 8, 9, 10, 11]) {
  const block = curriculum.match(new RegExp(`grade: ${grade},[\\s\\S]*?authors:`))?.[0] ?? "";
  assert.equal((block.match(/ready: true/g) ?? []).length, 6, `${grade} grade must have six ready routes`);
}

console.log("Content validation passed: Tolstoy + After the Ball + grades five through eleven");
