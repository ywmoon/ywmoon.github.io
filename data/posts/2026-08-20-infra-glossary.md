---
id: 2026-08-20-infra-glossary
title: "[인프라 용어사전] CDU (Coolant Distribution Unit) - 초거대 AI 데이터센터 수랭 혁신의 심장"
date: 2026-08-20
time: "05:46"
category: Terminology
status: published
summary: "냉각 인프라 아키텍처 CDU (Coolant Distribution Unit, 냉각수 분배 장치) 랙당 100kW가 넘는 블랙웰(B200) 시대를 지탱하는 유체 순환과 열교환의 중앙 관제 센터 📌 1. 30초 핵심 요약 & 개념 정의 CDU(Coolant Distribution Unit, 냉각수 분배 장치)는 고밀도 AI 데이터센터의 액체 냉각(Liquid"
labels:
  - 인프라용어사전
  - IT백과사전
  - CDU
  - 수랭식냉각
  - AI데이터센터
  - NHN클라우드
  - 엔비디아
---

<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.8; color: #1E293B;">

  <!-- 헤더 배너 -->
  <div style="background: linear-gradient(135deg, #0EA5E9 0%, #2563EB 100%); color: #FFFFFF; padding: 26px 24px; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.2);">
    <span style="background: rgba(255,255,255,0.2); padding: 4px 10px; border-radius: 20px; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">냉각 인프라 아키텍처</span>
    <h1 style="font-size: 24px; font-weight: 800; margin: 12px 0 6px 0; color: #FFFFFF;">CDU (Coolant Distribution Unit, 냉각수 분배 장치)</h1>
    <p style="margin: 0; font-size: 15px; opacity: 0.95; font-weight: 400;">랙당 100kW가 넘는 블랙웰(B200) 시대를 지탱하는 유체 순환과 열교환의 중앙 관제 센터</p>
  </div>

  <!-- 1. 30초 핵심 요약 & 개념 정의 -->
  <h2 style="border-left: 5px solid #2563EB; padding-left: 12px; font-size: 19px; font-weight: 700; color: #0F172A; margin: 28px 0 14px 0;">📌 1. 30초 핵심 요약 &amp; 개념 정의</h2>
  <p style="font-size: 15px; margin-bottom: 14px;">
    <strong>CDU(Coolant Distribution Unit, 냉각수 분배 장치)</strong>는 고밀도 AI 데이터센터의 액체 냉각(Liquid Cooling) 시스템에서 <strong>'혈액(냉각수)을 정밀하게 순환시키는 심장'</strong> 역할을 하는 필수 인프라 설비입니다. 건물 전체를 순환하는 1차 냉각 루프(Facility Loop)와 IT 서버 랙 내부를 직접 순환하는 2차 냉각 루프(Technology Loop) 사이를 물리적으로 격리하면서, 오직 <strong>열(Heat)만을 교환하여 초고열 GPU로 정밀 제어된 냉각수를 공급</strong>합니다.
  </p>
  <blockquote style="background: #F1F5F9; border-left: 4px solid #0EA5E9; padding: 14px 18px; border-radius: 6px; margin: 16px 0; font-size: 14px; color: #334155;">
    💡 <strong>직관적 비유</strong>: 인체의 '심장과 신장'을 합친 장치입니다. 심장이 혈압과 유량을 조절해 온몸에 피를 보내듯 랙 내부 칩셋에 냉각수를 뿜어주고, 신장처럼 미세 이물질과 기포를 걸러내어 서버가 부식되거나 누수가 발생하지 않도록 24시간 감시합니다.
  </blockquote>

  <!-- 2. 작동 원리 & 메커니즘 -->
  <h2 style="border-left: 5px solid #2563EB; padding-left: 12px; font-size: 19px; font-weight: 700; color: #0F172A; margin: 28px 0 14px 0;">⚙️ 2. 작동 원리 &amp; 메커니즘</h2>
  <p style="font-size: 15px; margin-bottom: 12px;">
    공랭(Air Cooling) 한계치(랙당 약 30~40kW)를 아득히 초과하는 최신 GPU 클러스터(엔비디아 GB200/NVL72 랙 기준 최대 120~140kW)에서는 팬을 돌려 바람을 부는 방식이 통하지 않습니다. CDU는 다음과 같은 2단계 격리 루프 메커니즘으로 이 방대한 열량을 안전하게 배출합니다.
  </p>

  <!-- 한글 공식 카드 -->
  <div style="background: #F8FAFC; border-left: 4px solid #2563EB; padding: 14px 18px; border-radius: 6px; margin: 16px 0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <strong style="color: #1E40AF;">📐 [CDU 열교환 및 냉각 능력 공식]</strong><br>
    <div style="margin: 8px 0; font-size: 15px; font-weight: 700; color: #0F172A;">
      제거 열량(Q) = 냉각수 질량 유량(m) × 액체 비열(Cp) × 열교환 온도차(ΔT)
    </div>
    <span style="font-size: 13px; color: #64748B;">
      👉 <strong>핵심 의미</strong>: CDU는 펌프 모터의 회전수(유량 m)와 판형 열교환기(PHE)의 밸브 개도율(온도차 ΔT)을 동적으로 제어하여 서버 랙에 결로 현상(이슬 맺힘)이 생기지 않는 최적의 공급 온도(일반적으로 25℃~32℃)를 실시간 유지합니다.
    </span>
  </div>

  <h3 style="font-size: 16px; font-weight: 700; color: #1E293B; margin: 20px 0 10px 0;">🔍 CDU의 4대 핵심 구성 요소</h3>
  <ul style="font-size: 14.5px; padding-left: 20px; margin-bottom: 18px;">
    <li><strong>판형 열교환기(Plate Heat Exchanger, PHE)</strong>: 빌딩 냉각탑/칠러에서 공급되는 일반 공업용수(1차)와 서버 칩셋에 닿는 초순수 가공 냉각수(2차)가 서로 섞이지 않고 열만 주고받도록 분리합니다.</li>
    <li><strong>가변 펌프(Redundant VFD Pumps)</strong>: N+1 또는 2N 이중화 펌프를 내장하여 하나의 펌프가 고장 나도 랙 전체의 냉각수 압력과 유속을 무중단으로 유지합니다.</li>
    <li><strong>탈기 장치 &amp; 마이크론 필터(De-aerator &amp; Filter)</strong>: 냉각 유로 내 미세 기포(Cavitation 현상 방지)와 5~50마이크론 크기의 부유 이물질을 연속 제거하여 콜드플레이트 막힘을 방지합니다.</li>
    <li><strong>정밀 제어기 &amp; 센서 어레이</strong>: 유량, 입·출구 압력차(ΔP), 공급/환수 온도, 노점(Dew Point) 온도를 실시간 계산해 결로가 발생하지 않도록 3방향 밸브를 제어합니다.</li>
  </ul>

  <h3 style="font-size: 16px; font-weight: 700; color: #1E293B; margin: 20px 0 10px 0;">📊 CDU 설치 방식별 비교 분석 (In-Rack vs In-Row vs Central)</h3>
  <div style="overflow-x: auto; margin: 16px 0;">
    <table style="width: 100%; border-collapse: collapse; font-size: 13.5px; text-align: left;">
      <thead>
        <tr style="background: #0F172A; color: #FFFFFF;">
          <th style="padding: 10px 12px; border: 1px solid #334155;">구분</th>
          <th style="padding: 10px 12px; border: 1px solid #334155;">In-Rack CDU (랙 내장형)</th>
          <th style="padding: 10px 12px; border: 1px solid #334155;">In-Row CDU (열 단위 독립형)</th>
          <th style="padding: 10px 12px; border: 1px solid #334155;">Central/Floor CDU (중앙 집중형)</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background: #F8FAFC;">
          <td style="padding: 10px 12px; border: 1px solid #E2E8F0; font-weight: 700;">냉각 용량</td>
          <td style="padding: 10px 12px; border: 1px solid #E2E8F0;">40kW ~ 100kW (단일 랙)</td>
          <td style="padding: 10px 12px; border: 1px solid #E2E8F0;">200kW ~ 500kW (2~4개 랙)</td>
          <td style="padding: 10px 12px; border: 1px solid #E2E8F0;">1,000kW (1MW) 이상 (룸 전체)</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; border: 1px solid #E2E8F0; font-weight: 700;">공간 점유</td>
          <td style="padding: 10px 12px; border: 1px solid #E2E8F0;">랙 내부 3U~6U 높이 점유</td>
          <td style="padding: 10px 12px; border: 1px solid #E2E8F0;">랙 열(Row) 사이에 전용 캐비닛 배치</td>
          <td style="padding: 10px 12px; border: 1px solid #E2E8F0;">기계실/데이터홀 외곽 전용 면적 필요</td>
        </tr>
        <tr style="background: #F8FAFC;">
          <td style="padding: 10px 12px; border: 1px solid #E2E8F0; font-weight: 700;">장애 영향도</td>
          <td style="padding: 10px 12px; border: 1px solid #E2E8F0;">단일 랙으로 장애 격리 (최소)</td>
          <td style="padding: 10px 12px; border: 1px solid #E2E8F0;">연결된 소수 랙 그룹에 영향</td>
          <td style="padding: 10px 12px; border: 1px solid #E2E8F0;">CDU 트립 시 데이터홀 전체 영향 (이중화 필수)</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; border: 1px solid #E2E8F0; font-weight: 700;">주요 적용처</td>
          <td style="padding: 10px 12px; border: 1px solid #E2E8F0;">엔비디아 GB200 NVL72 표준 랙</td>
          <td style="padding: 10px 12px; border: 1px solid #E2E8F0;">중소규모 고밀도 AI 전용 팟(Pod)</td>
          <td style="padding: 10px 12px; border: 1px solid #E2E8F0;">하이퍼스케일러 메가 데이터센터</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 3. 오늘자 실제 적용 사례 -->
  <h2 style="border-left: 5px solid #2563EB; padding-left: 12px; font-size: 19px; font-weight: 700; color: #0F172A; margin: 28px 0 14px 0;">🏢 3. 오늘자 실제 적용 사례 (오늘 뉴스 연계)</h2>
  <p style="font-size: 15px; margin-bottom: 12px;">
    오늘 국내외 데이터센터 시장의 핵심 화두는 <strong>'수랭식 AI 전용 인프라의 전면 가동'</strong>이었습니다.
  </p>
  <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px; margin: 14px 0;">
    <ul style="font-size: 14px; margin: 0; padding-left: 18px; color: #334155;">
      <li style="margin-bottom: 10px;">
        <strong>NHN클라우드 '팩토리X 서울' (엔비디아 B200 7,656장)</strong>: 차세대 B200 GPU 7,656장을 집약한 대규모 AI 팜에 고용량 CDU 기반의 수랭식 인프라를 구축했습니다. 이를 통해 전통적 공랭 방식 대비 데이터센터 전체 <strong>전력 소비량을 13.9% 절감</strong>하고 PUE(전력효율지수)를 획기적으로 낮췄습니다.
      </li>
      <li>
        <strong>삼성전자 광주공장 AI 냉각 공조 설비 2,400억 투자</strong>: 글로벌 빅테크들의 액체 냉각 수요 폭증에 맞춰 중앙 칠러 및 수랭 분배 장치(CDU/HVAC) 제조 라인을 신설하며 차세대 AI 하드웨어 생태계 진입을 본격화했습니다.
      </li>
    </ul>
  </div>

  <!-- 4. 기술적 장단점 및 도입 시 고려사항 -->
  <h2 style="border-left: 5px solid #2563EB; padding-left: 12px; font-size: 19px; font-weight: 700; color: #0F172A; margin: 28px 0 14px 0;">⚖️ 4. 기술적 장단점 및 도입 시 고려사항</h2>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 16px 0;">
    <div style="background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px; padding: 14px;">
      <strong style="color: #1D4ED8; font-size: 14.5px;">👍 기술적 장점</strong>
      <ul style="font-size: 13.5px; padding-left: 16px; margin: 8px 0 0 0; color: #1E3A8A;">
        <li>공랭 팬 전력 소모(전체 전력의 30~40%)를 극적으로 줄여 PUE 1.15 이하 달성 가능</li>
        <li>초고열 칩셋 온도를 정밀 유지하여 열 쓰로틀링(Throttling) 없이 GPU 연산 성능 100% 발휘</li>
        <li>랙당 집적도를 100kW+ 수준으로 3~4배 끌어올려 데이터센터 상면 공간(Footprint) 절약</li>
      </ul>
    </div>
    <div style="background: #FEF2F2; border: 1px solid #FECACA; border-radius: 8px; padding: 14px;">
      <strong style="color: #B91C1C; font-size: 14.5px;">⚠️ 엔지니어링 고려사항 &amp; 리스크</strong>
      <ul style="font-size: 13.5px; padding-left: 16px; margin: 8px 0 0 0; color: #7F1D1D;">
        <li><strong>누수(Leakage) 및 압력 감지</strong>: 빠른 차단 밸브(Quick Disconnect)와 이중 누수 감지 센서 케이블 설계 필수</li>
        <li><strong>냉각수 수질 화학 관리</strong>: 부식 방지제(Inhibitor)와 살균제 농도를 지속 모니터링하여 갈바닉 부식 방지 필요</li>
        <li><strong>초기 구축 비용(CAPEX)</strong>: 배관, 스테인리스 매니폴드, 이중화 펌프로 인한 초기 설비 투자비용 증가</li>
      </ul>
    </div>
  </div>

  <!-- 5. 엔지니어/실무자를 위한 1줄 인사이트 -->
  <h2 style="border-left: 5px solid #2563EB; padding-left: 12px; font-size: 19px; font-weight: 700; color: #0F172A; margin: 28px 0 14px 0;">💡 5. 엔지니어/실무자를 위한 1줄 인사이트</h2>
  <div style="background: #F8FAFC; border-left: 4px solid #10B981; padding: 14px 18px; border-radius: 6px; margin-top: 14px;">
    <p style="margin: 0; font-size: 14.5px; color: #065F46; font-weight: 600;">
      "엔비디아 블랙웰(B200/GB200) 세대부터 액체 냉각은 옵션이 아닌 기본 전제입니다. 인프라 아키텍트는 서버 스펙뿐 아니라 CDU의 유량(LPM) 제어 역량과 N+1 펌프 이중화, 결로 방지 노점 제어 로직을 데이터센터 랙 설계 단계부터 필수적으로 검증해야 합니다."
    </p>
  </div>

</div>