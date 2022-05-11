// Licensed under GPL v3 - Check Repository Root for full License notice.
// osu!Hikaru, a fully independent osu!Lazer Private Server backend.
// Copyright (C) 2021 Hikaru Team <copyright@hikaru.pw>

export default async (pool, req, res) => {
  try {
    res.status(200);
    res.json({});
  } catch (e) {
    res.status(500);
    res.json({});
    console.log(e);
  }
};
