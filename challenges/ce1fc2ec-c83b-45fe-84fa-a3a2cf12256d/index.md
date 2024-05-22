---
layout: challenge.njk
title: Hotel recommendation
referenceImage: reference.png
referenceCode: "https://play.tailwindcss.com/dArBqJEGej?size=540x720"
stage:
  - image: 86afc3c82ee9af67408229a4f5d0586f
    code: wlQuPl0uBz
  - image: "08c8cccde5b606f56e60560677f60aea"
    code: sqC3jnLbCf
  - image: 0de041982edfadc3b0d2ea86eedea4e2
    code: OluPqDl1tu
  - image: 3bd5687946c38d1cd1dd2e3dccaf0e49
    code: sCE4TjdnWv
  - image: db929551bbea4d4e068d9ab102ad43a9
    code: 903Vi7LNdi
  - image: 7acee9a0729a5e9f9cbbdf75cc076ca4
    code: IH83rGkiHY
audience:
  - image: 2793c4c154421d00c6a24cefae909914
    code: a1DapwT6i3
  - image: c03312bd1262c9168a033cd974b5af08
    code: jYCEQBjqLB
  - image: 653afa67edd81d73e9d047e8723aa12f
    code: qOiLX1XIRU
  - image: 74e7b78f3ab4fea17561deb8b1ff2be7
    code: PF1AfEglm7
  - image: 0ae72b83150121440e81abb09bdc0a8b
    code: VizGABhGul
  - image: 713adb0d2c10fddff5271129e72539a6
    code: mCzSXmWgFl
  - image: 1f09b8ec3987e6cd79b879d20cb114db
    code: 5ksQTGBSHi
  - image: 8b791e2dbc58700bd8863b8a39a1f540
    code: n9gaSSp9u0
  - image: 6eca5ac77e050c0babcb9e71ce6b95c9
    code: EPVAgsyQrh
  - image: "09fc6716e6a098b08a4762725a6e8017"
    code: lnfyb9rQlI
  - image: d0e7a86726a89364251320423ce2a793
    code: A30fO8cvav
  - image: b10abe91ae9b8b09afeadb1298c25438
    code: lmz4Nid0pc
  - image: 7a66560eb2cf7532b57509bee2af2fe0
    code: VlC6Sv5u0x
  - image: a40fbf8cc98068c17d3504f82a5f65e3
    code: tPO0kICnTp
  - image: f9dd2421da4bcc2f602d7d34c17b64b8
    code: 7JK61xxQTe
  - image: 8bef4707db501289f8462e1e9665f21c
    code: K6sYS0nC4T
  - image: eb6595aff99cb35e136e67b541db696a
    code: 0RVOffTf7P
  - image: f820299d41da1dd9139eed7c606e2e85
    code: yWb2h453Zl
  - image: 783ab6cd63347ec112f28d9cfac822f7
    code: pXi9pEq5KE
  - image: 26c015e67e3b0bc7538afe11cde3a39b
    code: O9551LZSx5
  - image: 873d7ef67ceb2b7fc21c45a87018a899
    code: I2GEVpUn17
  - image: e59e72ead09c2442588dabe432e9cfdb
    code: KWrMJZPTYW
  - image: 4ca9e97d5f325f9bc71d018035e69be3
    code: Z953X5BKcx
---

## Objectives

<div class="objectives" lang="th">

- สร้างการ์ดโรงแรม ประกอบด้วย พื้นที่สำหรับรูปภาพทางด้านซ้าย และข้อมูลทางด้านขวา ครอบด้วยกล่องสีแดงที่มีไอคอนรูปป้ายราคา และมีข้อความว่า “<em>Special recommendation</em>”

  - รูปป้ายราคา: <em>/images/price-label-white.svg</em>

- เพิ่มรูปภาพ 3 รูป แบ่งเป็น 2 แถว โดยแถวแรกมีภาพ 1 ภาพ และแถวที่สองมี 2 ภาพ มีช่องว่างระหว่างภาพเล็กๆ แต่ไม่มีช่องว่างระหว่างภาพกับกรอบที่ล้อมรอบ

  - Image 1: <em>/images/bed.jpg</em>
  - Image 2: <em>/images/bath.jpg</em>
  - Image 3: <em>/images/sofa.jpg</em>

- ในส่วนที่แสดงข้อมูล ใส่ชื่อโรงแรมที่ด้านบน และใส่ราคาที่ด้านล่างขวา

  - ชื่อโรงแรม: <em>Flexbox Suites Bangkok</em>
  - ราคาเดิม: <em>฿5,000</em> มีขีดฆ่า
  - ราคาที่ลดแล้ว: <em>฿892</em> เป็นตัวหนังสือสีแดงที่ใหญ่กว่า โดยด้านล่างมีข้อความ “<em>FREE CANCELLATION</em>” เป็นสีเขียว

- ใส่คะแนนใต้ชื่อโรงแรม ซึ่งประกอบด้วย

  - ดาวสีทอง 3 ดวง - รูปดาว: <em>/images/star-amber-500.svg</em>
  - ข้อความว่า “<em>8.9 Exceptional</em>” เป็นสีน้ำเงิน
  - ข้อความว่า “<em>(8,774 reviews)</em>”

- ในส่วนที่แสดงข้อมูล ให้ใส่รายละเอียดเพิ่มเติมดังนี้

  - แถวที่แสดงข้อความ “<em>Promoted</em>” มีเส้นขอบรอบข้อความ
  - แถวที่แสดงตำแหน่งโรงแรม “<em>Siam - City center</em>” - รูปหมุด: <em>/images/pin-neutral-800.svg</em>
  - แถวที่แสดงข้อความสีเขียว “<em>Breakfast included</em>”
  - แถวที่แสดงข้อความสีแดง “<em>Only 1 left!</em>”

</div>

<div class="objectives" lang="en">

- Create a hotel card with images section on the left, information on the right, wrapped
  in a red box whose title has a price tag icon and text “<em>Special recommendation</em>”.

  - Price tag icon: <em>/images/price-label-white.svg</em>

- Add 3 images to the images section. The image section has 2 rows. First row has
  one image, the second row has 2 images. There is a little space between images
  but there is no space between the image and enclosing box.

  - Image 1: <em>/images/bed.jpg</em>
  - Image 2: <em>/images/bath.jpg</em>
  - Image 3: <em>/images/sofa.jpg</em>

- Hotel name at the top and price at the bottom right.

  - Hotel name: <em>Flexbox Suites Bangkok</em>
  - Original price: <em>฿5,000</em> with strikethrough
  - Discounted price: <em>฿892</em> in bigger red text, below with words “<em>FREE CANCELLATION</em>” in green.

- Rating below hotel name, consists of:

  - 3 yellow-orange stars - star image: <em>/images/star-amber-500.svg</em>
  - “<em>8.9 Exceptional</em>” in blue
  - “<em>(8,774 reviews)</em>”

- More detailed section as follows:

  - A “<em>Promoted</em>” row with a border
  - A location row with text “<em>Siam - City center</em>” - pin image: <em>/images/pin-neutral-800.svg</em>
  - A green “<em>Breakfast included</em>” row
  - A red “<em>Only 1 left!</em>” row.

</div>
