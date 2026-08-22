---
id: 2026-08-23-kimm-skinno-waste-heat-reuse-cooling
title: "버려지는 열을 냉난방 에너지로: 기계연구원(KIMM)·SK이노베이션 액체냉각 폐열 회수(Waste Heat Recovery) 기술과 도심 구역난방 연계 공학"
date: 2026-08-23
time: "13:00"
category: Tech Deep Dive
status: published
summary: "AI 가속기의 고발열을 해결하는 액체냉각 기술이 단순한 방열을 넘어 '폐열 회수(Heat Reuse)'의 순환 경제로 진화하고 있습니다. 한국기계연구원이 개발한 40℃ 저온 폐열 구동 화학흡착식 히트펌프(비냉방출력 SCP 346.5 W/kg)와 SK이노베이션의 액체냉각-폐열회수 실증을 바탕으로, EU EED 규제 대응, PUE 한계를 돌파하는 ERE(에너지 재사용 효율) 메커니즘과 도심 구역난방 연계 공학을 심층 분석합니다."
labels:
  - 테크딥다이브
  - 폐열회수
  - 액체냉각
  - 한국기계연구원
  - SK이노베이션
  - 히트펌프
  - 구역난방
  - ERE
  - 친환경데이터센터
  - 탄소중립
updated: "2026-08-23 13:00"
---

<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans KR', sans-serif; line-height: 1.85; color: #1E293B; max-width: 100%; word-break: keep-all; font-size: 16px;">

  <!-- 서론 인트로 카드 -->
  <div style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); color: #FFFFFF; padding: 34px 30px; border-radius: 12px; margin-bottom: 36px; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.15);">
    <div style="display: inline-block; background-color: #059669; color: #FFFFFF; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 14px;">THERMAL ENGINEERING & CIRCULAR ENERGY</div>
    <h1 style="font-size: 26px; font-weight: 800; line-height: 1.4; margin: 0 0 16px 0; color: #F8FAFC;">버려지는 열을 냉난방 에너지로: 기계연·SK이노 액체냉각 폐열 회수 기술 분석</h1>
    <p style="font-size: 15px; line-height: 1.7; color: #CBD5E1; margin: 0;">데이터센터에 투입되는 전력의 100%는 열역학 제1법칙에 따라 전량 열로 전환됩니다. AI 칩을 식힌 40~65℃ 액체 폐열을 냉각탑으로 버리지 않고, 전기화학적 히트펌프를 통해 도심 난방과 냉방으로 재생산하는 열순환 공학을 분석합니다.</p>
  </div>

  <!-- 출처 및 연구 레퍼런스 박스 -->
  <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #059669; border-radius: 8px; padding: 20px 24px; margin-bottom: 36px; font-size: 14px; color: #475569;">
    <strong>📄 공식 연구 발표:</strong> 한국기계연구원(KIMM) 탄소중립기계연구소 김영 책임연구원팀·중앙대 김민성/김동규 교수팀·삼중테크, <em>전기화학적 압축기를 이용한 40℃ 저온 구동 화학흡착식 히트펌프 시스템 개발</em> (2026.08.05)<br>
    <strong>🔗 주요 언론 보도 1:</strong> <a href="https://www.etnews.com/20260805000310" target="_blank" rel="noopener noreferrer" style="color: #059669; font-weight: 600; text-decoration: underline;">[전자신문] 버려지는 폐열, 냉방 활용...기계연 차세대 히트펌프 개발 기사 바로가기</a><br>
    <strong>📰 주요 언론 보도 2:</strong> <a href="https://news.google.com/rss/articles/CBMiVEFVX3lxTE5CUUtNWFZZTllTQXlIXzBEcm5oQndoQ2JwTDl5T3JKVnhXdDVURmtoV1pMMlpBREdEdTAtZERJWEREQUhuMFNwQ3E3QzhRWXJkaWhEMg?oc=5" target="_blank" rel="noopener noreferrer" style="color: #059669; font-weight: 600; text-decoration: underline;">[동아사이언스] 공장·데이터센터서 버려지는 40℃ 폐열, 냉방에 쓴다</a><br>
    <strong>🤝 산업 실증 보도 3:</strong> <a href="https://news.google.com/rss/articles/CBMiTEFVX3lxTE1US2k5elhZX1BzVTgwQ0tPcm1SQU5rUXVYMkpzdEI1bTRxOG9UNHhpNldJR1VWaWlfNDRkWldtd2Fsb09RODNGY18tcTc?oc=5" target="_blank" rel="noopener noreferrer" style="color: #059669; font-weight: 600; text-decoration: underline;">[에너지프로슈머] AI 데이터센터 '전력·냉각' 승부…기계연·SK이노, 액체냉각·폐열회수 기술 맞손</a><br>
    <strong>⚖️ 글로벌 법적 규제:</strong> <a href="https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficiency-targets-directive-and-rules/energy-efficiency-directive_en" target="_blank" rel="noopener noreferrer" style="color: #059669; text-decoration: underline;">유럽연합 에너지효율지침(EU EED, Directive 2023/1791)</a> 제12조 (500kW 이상 데이터센터 폐열 재활용 의무화)
  </div>

  <p>AI 가속기 칩셋의 열설계전력(TDP)이 1,000W를 돌파하면서 전 세계 데이터센터 냉각 인프라는 공랭(Air Cooling)에서 액체냉각(Liquid Cooling)으로 급속히 전환되고 있습니다. 그러나 지금까지의 냉각 기술 논의는 오직 '어떻게 칩의 열을 식힐 것인가'라는 <strong>단방향 방열(Heat Dissipation)</strong>에만 머물러 있었습니다.</p>

  <p>유럽연합(EU)의 개정 에너지효율지침(EED) 발효와 함께 글로벌 ESG 규제는 데이터센터를 향해 배출되는 폐열을 지역 사회와 산업에 재공급할 것을 요구하고 있습니다. 데이터센터 효율성 지표 역시 단순 PUE(Power Usage Effectiveness)에서 회수된 에너지를 차감하여 평가하는 <strong>ERE(Energy Reuse Effectiveness)</strong>로 완전히 전환되는 추세입니다.</p>

  <!-- 1장: 열역학 기초 및 액체냉각 폐열 특성 -->
  <h2 style="border-left: 5px solid #059669; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">♨️ 1. 데이터센터 열역학 기초와 액체냉각 폐열의 물리적 성질</h2>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">1.1 열역학 제1법칙과 전력-열 변환 등식</h3>
  <p>반도체 트랜지스터의 스위칭 저항으로 인해 데이터센터 IT 장비에 인가된 전기 에너지($W$)는 열역학 제1법칙에 따라 100% 열 에너지($Q$)로 변환됩니다 ($Q = W = V 	imes I 	imes t$). 즉, 100MW 규모의 AI 데이터센터는 시간당 약 8,600만 kcal에 달하는 막대한 열량을 지속적으로 배출합니다.</p>

  <p>이 열량은 대기 중으로 무의미하게 방출될 경우 막대한 온실가스 간접 배출과 열섬 현상을 야기하지만, 적절한 온도 대역에서 포집할 경우 고부가가치 지역 에너지 자원으로 재활용될 수 있습니다.</p>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">1.2 공랭 폐열(25~35℃) vs 액체냉각 폐열(45~65℃)의 엑서지(Exergy) 비교</h3>
  <p>기존 공랭식 데이터센터의 배출 공기는 25~35℃ 수준으로 외부 온도와의 차이가 작아 유효 에너지(엑서지, Exergy)가 매우 낮아 재활용이 불가능했습니다. 반면 D2C(Direct-to-Chip) 및 액침냉각(Immersion Cooling) 시스템은 비열이 높은 냉각액을 사용하여 <strong>45~65℃의 고온 온수</strong> 형태로 열을 회수할 수 있어 구역난방 및 흡착식 냉방의 직접 열원으로 활용이 가능합니다.</p>

  <p>온도가 높을수록 카르노(Carnot) 효율 한계가 상승하여 히트펌프 가동 시 필요한 전력 소비량이 급격히 감소하므로, 액체냉각은 폐열 회수 공학의 필수 선행 조건입니다.</p>

  <!-- 2장: 기계연구원 화학흡착식 히트펌프 기술 -->
  <h2 style="border-left: 5px solid #059669; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">⚙️ 2. 한국기계연구원(KIMM) 40℃ 저온 구동 화학흡착식 히트펌프</h2>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">2.1 전기화학적 압축기(Electrochemical Compressor)와 저온 구동 사이클</h3>
  <p>한국기계연구원 탄소중립기계연구소 김영 책임연구원팀, 중앙대학교 김민성·김동규 교수팀, 삼중테크 연구팀은 기존 70~80℃ 이상에서만 작동하던 흡착식 냉방기의 한계를 극복하고, <strong>40℃ 수준의 극저온 폐열로도 구동되는 차세대 화학흡착식 히트펌프</strong>를 세계 최초로 개발했습니다.</p>

  <p>물리적 모터 구동부가 없는 수소 이온 교환막 기반 전기화학적 압축기를 적용하여 소음과 진동 없이 냉각 사이클을 가동하며 기계적 마모 요소를 원천 제거했습니다.</p>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">2.2 핵심 성능 지표: 비냉방출력(SCP) 346.5 W/kg 달성</h3>
  <p>연구팀은 고효율 복합 흡착제를 적용하여 흡착제 단위 질량당 냉방 출력인 <strong>비냉방출력(SCP, Specific Cooling Power) 346.5 W/kg</strong>을 달성했습니다. 이는 기존 상용 흡착식 시스템 대비 2.5배 이상 향상된 수치로, 폐열 회수 장치의 설치 면적과 중량을 획기적으로 줄였습니다.</p>

  <!-- 수식 카드 1: ERE 및 성적계수(COP) 공식 -->
  <div style="background-color: #F1F5F9; border-left: 4px solid #059669; padding: 20px 22px; border-radius: 6px; margin: 20px 0; font-size: 15px;">
    <strong>📐 에너지 재사용 효율(ERE) 및 히트펌프 성적계수(COP) 등식:</strong><br>
    <code style="font-size: 16px; font-weight: 700; color: #0F172A;">ERE = (Total_Energy - Reuse_Energy) / IT_Energy</code><br>
    <code style="font-size: 16px; font-weight: 700; color: #0F172A;">COP_cooling = Q_cooling / (W_electrical + Q_waste_heat)</code><br>
    <span style="font-size: 13px; color: #475569;">
      • Total_Energy: 데이터센터 전체 투입 전력 (kWh), Reuse_Energy: 지역사회/난방으로 회수된 열에너지 (kWh)<br>
      • 폐열 회수율이 60%를 초과할 경우 ERE 지표는 0.6 이하로 낮아져 탄소 배출량이 극적으로 감소함
    </span>
  </div>

  <!-- 3장: 성능 비교 표 -->
  <h2 style="border-left: 5px solid #059669; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">📊 3. 폐열 회수 방식별 기술 사양 및 열효율 비교 분석</h2>

  <div style="margin: 24px 0; overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; border: 1px solid #CBD5E1;">
      <thead>
        <tr style="background-color: #0F172A; color: #FFFFFF;">
          <th style="padding: 12px 14px; border: 1px solid #334155;">기술 방식</th>
          <th style="padding: 12px 14px; border: 1px solid #334155;">요구 구동 온도</th>
          <th style="padding: 12px 14px; border: 1px solid #334155;">에너지 효율 (COP)</th>
          <th style="padding: 12px 14px; border: 1px solid #334155;">주요 용도 및 장점</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background-color: #F8FAFC;">
          <td style="padding: 12px 14px; font-weight: 600; border: 1px solid #CBD5E1;">기계연 화학흡착식 히트펌프</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1; font-weight: 700; color: #059669;">40 ~ 55℃ (저온)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">COP 0.7~0.9 (냉방 생산)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">AI 데이터센터 폐열 직접 흡수, 무진동·무소음 친환경 냉방</td>
        </tr>
        <tr>
          <td style="padding: 12px 14px; font-weight: 600; border: 1px solid #CBD5E1;">전기 증기압축식 히트펌프</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">30 ~ 50℃</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">COP 3.5~4.8 (난방 승온)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">폐열을 80~90℃로 승온하여 도심 구역난방 공급</td>
        </tr>
        <tr style="background-color: #F8FAFC;">
          <td style="padding: 12px 14px; font-weight: 600; border: 1px solid #CBD5E1;">기존 흡수식 냉온수기</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">80 ~ 120℃ (고온)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">COP 0.6~0.8</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">공장 고온 스팀 전용 (데이터센터 적용 불가)</td>
        </tr>
        <tr>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">직접 열교환 (스마트팜 연계)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">35 ~ 45℃</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">열효율 95%+</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">비닐하우스 온실 난방 및 양식장 수온 유지</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 4장: SK이노베이션 액체냉각 플루이드 실증 -->
  <h2 style="border-left: 5px solid #059669; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">🏢 4. SK이노베이션 플루이드 실증과 도심 구역난방 연계</h2>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">4.1 프리미엄 냉각유(Fluid)와 열교환기 최적화</h3>
  <p>SK엔무브와 SK이노베이션은 그룹 내 고인화점·저점도 유전체 절연유를 기반으로 액침냉각 및 D2C 냉각 플루이드를 공급하고 있습니다. 기계연구원과의 공동 연구를 통해 열교환 효율을 기존 대비 18% 향상시키고 펌핑 동력을 12% 절감하는 복합 냉각 회로를 실증했습니다.</p>

  <p>플루이드의 낮은 점도는 펌프에 가해지는 유압 부하를 줄여주며, 높은 열전도도는 칩 코어에서 히트싱크로의 열 전달 저항을 최소화합니다.</p>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">4.2 도심 데이터센터와 집단에너지 열배관망(District Heating) 직결</h3>
  <p>데이터센터 출구 온수(55℃)를 도심 집단에너지 배관망의 승온용 히트펌프와 직결하여 인근 아파트 단지 및 상업 시설의 난방과 급탕열로 공급합니다. 이는 냉각탑 가동에 필요한 물 증발량을 없애 <strong>수자원 소비 효율(WUE)을 0.1 이하</strong>로 낮추는 부수 효과를 창출합니다.</p>

  <p>도심 난방 네트워크와의 직결은 데이터센터의 사회적 수용성을 획기적으로 개선하고 탄소 배출권 매각 수익을 창출하는 ESG 모범 사례로 안착하고 있습니다.</p>

  <!-- 5장: 규제 대응 및 탄소배출권 경제성 -->
  <h2 style="border-left: 5px solid #059669; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">⚖️ 5. EU EED 지침 준수 및 폐열 회수의 경제성 분석</h2>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">5.1 유럽연합 에너지효율지침 제12조의 법적 파급력</h3>
  <p>EU는 2023년 개정된 에너지효율지침(Directive 2023/1791) 제12조에 따라 정격 전력 500kW 이상의 모든 신규 데이터센터에 대해 <strong>폐열 재활용 타당성 평가 및 시스템 연계를 의무화</strong>했습니다. 폐열을 단순 방출하는 데이터센터는 건축 인허가 거부와 고율의 탄소 부과금 대상이 됩니다.</p>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">5.2 100MW 데이터센터 기준 연간 120억 원 탄소배출권 및 난방열 매출</h3>
  <p>100MW 규모의 액체냉각 AI 센터에서 시간당 50MWth의 유효 열량을 회수하여 도심 난방망에 판매할 경우 연간 약 90억 원의 열 판매 수익과 30억 원 상당의 탄소배출권(KAU/EUA)을 확보하여 <strong>폐열 회수 설비 투자비(CapEx)를 3년 이내에 회수</strong>할 수 있습니다.</p>

  <!-- 6장: 글로벌 선도국 폐열 재활용 사례 비교 -->
  <h2 style="border-left: 5px solid #059669; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">🌍 6. 글로벌 선도국 폐열 재활용 사례와 국내 도입 방향</h2>

  <p>핀란드 헬싱키의 포르툼(Fortum) 및 스웨덴 스톡홀름 데이터 파크는 데이터센터 폐열로 도시 난방 수요의 40% 이상을 충당하고 있습니다. 국내에서도 기계연구원과 SK이노베이션의 기술 실증을 바탕으로 한국지역난방공사 배관망과의 연계를 확대하고 제도적 인센티브를 신설해야 합니다.</p>

<!-- 6장: 글로벌 ASHRAE 규격 및 국내외 실증 사례 -->
  <h2 style="border-left: 5px solid #059669; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">🌐 6. 글로벌 열관리 표준(ASHRAE Liquid Class)과 국내외 실증 사례</h2>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">6.1 ASHRAE TC 9.9 리퀴드 클래스(W1~W5) 열역학 분류</h3>
  <p>미국공조냉동공학회(ASHRAE)는 데이터센터 액체냉각 공급 수온에 따라 W1(17~27℃)부터 W5(>45℃)까지 5개 등급으로 분류합니다. 기계연구원과 SK이노베이션이 실증한 고온 액체냉각 시스템은 <strong>W4/W5 클래스(출구 온도 50~65℃)</strong>에 해당하여 냉각탑 없이 100% 자연 방열(Dry Cooler) 및 고효율 폐열 회수가 가능합니다.</p>

  <h3 style="font-size: 18px; font-weight: 700; color: #1E293B; margin: 24px 0 12px 0;">6.2 북유럽 집단에너지 연계 사례 vs 국내 적용 방안</h3>
  <p>핀란드 헬싱키의 포르툼(Fortum) 및 스웨덴 스톡홀름 데이터 파크는 데이터센터 폐열로 도시 난방 수요의 40% 이상을 충당하고 있습니다. 국내에서도 기계연구원의 흡착식 히트펌프 기술을 통해 여름철에는 지역 냉방, 겨울철에는 지역 난방으로 전환하는 사계절 열순환 모델이 완성됩니다.</p>

  <!-- 수식 카드 2: 카르노 엑서지 계수 공식 -->
  <div style="background-color: #F1F5F9; border-left: 4px solid #059669; padding: 20px 22px; border-radius: 6px; margin: 20px 0; font-size: 15px;">
    <strong>📐 폐열 엑서지(Exergy) 가용도 및 카르노 계수 방정식:</strong><br>
    <code style="font-size: 16px; font-weight: 700; color: #0F172A;">Exergy_Factor (θ) = 1 - (T_ambient / T_waste_heat)</code><br>
    <span style="font-size: 13px; color: #475569;">
      • T_ambient: 외기 기준 절대온도 (K), T_waste_heat: 액체냉각 폐열 절대온도 (K)<br>
      • 공랭 폐열(30℃=303K, 외기 20℃=293K) 기준 엑서지 계수: θ ≈ 0.033 (유효 가용도 3.3%)<br>
      • 액체 폐열(60℃=333K, 외기 20℃=293K) 기준 엑서지 계수: θ ≈ 0.120 (가용 에너지 3.6배 급증)
    </span>
  </div>

  <!-- 7장: 흡착제 10만 사이클 내구성 엔지니어링 -->
  <h2 style="border-left: 5px solid #059669; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">🔬 7. 화학흡착제 나노 복합체 10만 사이클 내구성 검증</h2>

  <p>기계연구원 연구팀은 금속-유기 골격체(MOF) 흡착제의 고질적 문제였던 수분 흡탈착 반복 시 구조 붕괴 현상을 방지하기 위해 <strong>내수성 고분자 바인더 나노 코팅 기술</strong>을 적용했습니다. 10만 회 이상의 연속 열 흡탈착 가속 수명 시험에서도 성능 저하율 2% 미만을 기록하여 15년 이상의 상용 가동 수명을 입증했습니다.</p>

<!-- 8장: 100MW 기준 10년 TCO 및 탄소 배출권 경제성 비교 표 -->
  <h2 style="border-left: 5px solid #059669; padding-left: 14px; margin: 44px 0 20px 0; color: #0F172A; font-size: 22px; font-weight: 700; letter-spacing: -0.3px;">💰 8. 100MW AIDC 기준 10년 TCO 및 에너지 회수 경제성 분석</h2>

  <p>100MW 규모의 액체냉각 AI 데이터센터에서 냉각탑 방열 방식과 기계연-SK이노 폐열 회수 히트펌프 시스템을 도입했을 때의 10년 경제성 비교 지표는 다음과 같습니다:</p>

  <div style="margin: 24px 0; overflow-x: auto;">
    <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; border: 1px solid #CBD5E1;">
      <thead>
        <tr style="background-color: #0F172A; color: #FFFFFF;">
          <th style="padding: 12px 14px; border: 1px solid #334155;">분석 지표 (100MW 기준)</th>
          <th style="padding: 12px 14px; border: 1px solid #334155;">기존 냉각탑 단순 방열 방식</th>
          <th style="padding: 12px 14px; border: 1px solid #334155;">기계연-SK이노 폐열 회수 연계 시스템</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background-color: #F8FAFC;">
          <td style="padding: 12px 14px; font-weight: 600; border: 1px solid #CBD5E1;">에너지 재사용 효율 (ERE)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">ERE = 1.25 ~ 1.35 (재활용 전무)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1; font-weight: 700; color: #059669;">ERE = 0.55 ~ 0.65 (폐열 60% 회수)</td>
        </tr>
        <tr>
          <td style="padding: 12px 14px; font-weight: 600; border: 1px solid #CBD5E1;">연간 수자원 소비량 (WUE)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">연간 약 4.5억 리터 (증발 손실)</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1; font-weight: 700; color: #2563EB;">0 리터 (완전 밀폐형 폐열 회수)</td>
        </tr>
        <tr style="background-color: #F8FAFC;">
          <td style="padding: 12px 14px; font-weight: 600; border: 1px solid #CBD5E1;">연간 난방열 판매 및 탄소배출권 수익</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">0 원</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1; font-weight: 700; color: #059669;">연간 약 120억 원 (열매출 90억 + 탄소배출권 30억)</td>
        </tr>
        <tr>
          <td style="padding: 12px 14px; font-weight: 600; border: 1px solid #CBD5E1;">설비 투자비(CapEx) 회수 기간</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1;">-</td>
          <td style="padding: 12px 14px; border: 1px solid #CBD5E1; font-weight: 700; color: #D97706;">약 2.9년 (초기 투자비 전액 회수)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 결론 요약 박스 -->
  <div style="background-color: #F8FAFC; border: 2px solid #059669; border-radius: 10px; padding: 26px; margin-top: 36px;">
    <h3 style="margin: 0 0 10px 0; font-size: 18px; font-weight: 700; color: #065F46;">💡 핵심 요약 및 공학적 시사점</h3>
    <ul style="margin: 0; padding-left: 20px; color: #334155; font-size: 14px; line-height: 1.8;">
      <li><strong>저온 폐열 혁신:</strong> 40℃ 저온 폐열로 가동되는 화학흡착식 히트펌프 개발로 방열을 냉방 에너지로 전환.</li>
      <li><strong>초고성능 지표:</strong> 비냉방출력(SCP) 346.5 W/kg을 달성하여 장치 부피를 소형화하고 데이터센터 적용성 확보.</li>
      <li><strong>규제 준수:</strong> EU EED 지침(폐열 의무 재활용) 및 탄소배출권 규제에 완벽 대응하는 ERE 개선 메커니즘 확립.</li>
      <li><strong>순환 경제:</strong> 액체냉각-폐열회수-구역난방 3각 연계를 통해 전력과 냉각수 소모를 동시에 절감하는 친환경 AIDC 구현.</li>
    </ul>
  </div>

</div>
