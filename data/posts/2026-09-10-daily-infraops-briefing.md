---
id: 2026-09-10-daily-infraops-briefing
title: "[2026.09.10] 오늘의 글로벌 클라우드 & 데이터센터 인프라 핵심 동향 브리핑"
date: 2026-09-10
time: "05:57"
category: Daily Briefing
status: published
summary: "DAILY INFRASTRUCTURE DIGEST | 2026.09.10 글로벌 AI 인프라 자본 집약과 병목의 공존: 가속기 수급 다변화부터 전력·규제 장벽까지 인공지능 워크로드가 데이터센터의 전력 밀도와 공급망 한계를 시험하면서, 글로벌 하이퍼스케일러들의 인프라 전략이 다층화되고 있습니다. 한편에서는 특정 가속기 벤더에 대한 종속성을 완화하고 대규모 추"
labels:
  - AWS
  - 구글
  - 데이터센터
  - AI인프라
  - 클라우드
  - 전력망
  - 퀄컴
  - 소버린AI
---

<div style='font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.8; color: #1E293B; max-width: 860px; margin: 0 auto; padding: 20px 0;'>

<header style='border-bottom: 2px solid #E2E8F0; padding-bottom: 24px; margin-bottom: 32px;'>
  <p style='color: #64748B; font-size: 14px; margin-bottom: 8px; font-weight: 600; letter-spacing: 0.5px;'>DAILY INFRASTRUCTURE DIGEST | 2026.09.10</p>
  <h1 style='color: #0F172A; font-size: 28px; line-height: 1.4; margin-top: 0; margin-bottom: 16px; font-weight: 800;'>글로벌 AI 인프라 자본 집약과 병목의 공존: 가속기 수급 다변화부터 전력·규제 장벽까지</h1>
  <p style='color: #334155; font-size: 15px; margin: 0;'>
    인공지능 워크로드가 데이터센터의 전력 밀도와 공급망 한계를 시험하면서, 글로벌 하이퍼스케일러들의 인프라 전략이 다층화되고 있습니다. 한편에서는 특정 가속기 벤더에 대한 종속성을 완화하고 대규모 추론 비용을 통제하기 위해 퀄컴과 같은 레거시 반도체 강자와 장기 공급 협약을 맺는가 하면, 북유럽의 청정 전력망을 선점하기 위해 단일 국가에 수십조 원을 투입하는 대규모 CapEx 집행이 이어지고 있습니다. 그러나 다른 한편에서는 막대한 자본력에도 불구하고 고전압 변압기 등 핵심 배전 설비의 수급난과 지자체 인허가 규제로 인해 수조 원대 프로젝트가 지연되는 물리적 인프라의 현실적 한계도 뚜렷해지고 있습니다. 오늘 브리핑에서는 반도체 조달, 전력·냉각 인프라 입지, 공급망 병목, 그리고 데이터 주권 중심의 특화 클라우드 전환 동향을 종합적으로 분석합니다.
  </p>
</header>

<section style='background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px; margin-bottom: 40px;'>
  <h2 style='color: #0F172A; font-size: 18px; margin-top: 0; margin-bottom: 16px; display: flex; align-items: center;'>
    <span style='margin-right: 8px;'>📌</span> 오늘의 3대 핵심 관전 포인트 (Key Highlights)
  </h2>
  <ul style='margin: 0; padding-left: 20px; color: #334155; font-size: 15px;'>
    <li style='margin-bottom: 12px;'>
      <strong>AWS와 퀄컴의 장기 AI 칩 공급 협력</strong>: 아마존웹서비스(AWS)가 대규모 데이터센터 추론 워크로드 효율화를 위해 퀄컴과 다세대 칩 공급 협약을 체결하며 자체 실리콘(Trainium/Inferentia)과 엔비디아 의존도를 분산시키는 멀티 벤더 가속기 생태계를 본격 가동합니다.
    </li>
    <li style='margin-bottom: 12px;'>
      <strong>구글의 핀란드 130억 유로(약 23조 원) 인프라 투자</strong>: 북유럽의 무탄소 전력망과 해수 직접 냉각 인프라를 바탕으로 하미나(Hamina) 거점을 기가와트(GW)급 차세대 AI 데이터센터 클러스터로 확장하여 글로벌 탄소중립 요건 및 연산 수요에 동시 대응합니다.
    </li>
    <li>
      <strong>구글·블랙스톤 6.7조 원 프로젝트 지연과 물리적 병목</strong>: 대규모 사모펀드 자본과 하이퍼스케일러의 협력에도 불구하고, 초고압 변압기 등 전력망 핵심 자재 수급난과 지자체 환경 인허가 지연으로 인해 물리적 인프라 확장이 실질적인 벽에 부딪히고 있습니다.
    </li>
  </ul>
</section>

<section style='margin-bottom: 40px;'>
  <h2 style='color: #0F172A; font-size: 22px; border-bottom: 2px solid #0F172A; padding-bottom: 8px; margin-bottom: 20px;'>
    1. 하이퍼스케일러의 실리콘 포트폴리오 다변화: AWS-퀄컴 파트너십의 전략적 의미
  </h2>
  <p style='color: #334155; font-size: 15px; margin-bottom: 16px;'>
    아마존웹서비스(AWS)가 퀄컴과 체결한 대규모 AI 데이터센터 칩 공급 협약은 하이퍼스케일 인프라의 가속기 조달 전략이 근본적인 전환점에 도달했음을 보여줍니다. 이번 파트너십은 수십억 달러에서 최대 80조 원 규모에 이르는 다년간의 다세대(multi-generational) 계약으로, 데이터센터 서버 랙에 최적화된 저전력 고효율 AI 가속 칩을 공급받는 것을 골자로 합니다.
  </p>
  <p style='color: #334155; font-size: 15px; margin-bottom: 16px;'>
    현재 인공지능 인프라는 거대 모델 학습(Training) 중심에서 서비스 상용화에 따른 대규모 추론(Inference) 단계로 중심축이 빠르게 이동하고 있습니다. 추론 워크로드는 학습 단계에 비해 연산 복잡도는 상대적으로 낮지만, 24시간 연중무휴로 운영되는 특성상 랙당 전력 소비(Power Consumption per Rack)와 전력 효율(Performance per Watt)이 전체 데이터센터 운영 비용(TCO)을 좌우하는 결정적 요인이 됩니다. 엔비디아의 플래그십 GPU는 뛰어난 연산 성능을 제공하지만 공급 부족과 높은 전력 소모, 가파른 라이선스 및 칩 단가라는 부담을 안고 있습니다.
  </p>
  <p style='color: #334155; font-size: 15px; margin-bottom: 16px;'>
    AWS는 이미 자체 개발한 트레이니엄(Trainium)과 인퍼런시아(Inferentia) 칩셋을 적극적으로 도입해 왔으나, 급격히 팽창하는 엔터프라이즈 추론 수요를 단일 공급망만으로 감당하기에는 한계가 있었습니다. 모바일 및 엣지 디바이스에서 독보적인 전력 효율성을 검증받은 퀄컴의 NPU 및 AI 가속 아키텍처를 하이퍼스케일 서버 랙에 통합함으로써, AWS는 전력 밀도 제약이 심각한 도심 인근 데이터센터에서도 공간 대비 높은 추론 처리량을 확보할 수 있게 되었습니다.
  </p>
  <blockquote style='background: #F1F5F9; border-left: 4px solid #3B82F6; margin: 20px 0; padding: 16px 20px; font-size: 14px; color: #475569;'>
    <strong>아키텍처 분석</strong>: 단일 가속기 아키텍처 의존은 공급망 리스크뿐만 아니라 전력 및 쿨링 용량 한계에 직면한 데이터센터 인프라 엔지니어링에 구조적인 제약을 유발합니다. 하이퍼스케일러들은 '학습용 초고성능 GPU', '자체 설계 가속기', '고효율 상용 실리콘'으로 삼분화된 이기종 컴퓨팅(Heterogeneous Computing) 패브릭을 구축하여 랙당 열 설계 전력(TDP)을 최적화하는 데 주력하고 있습니다.
  </blockquote>
</section>

<section style='margin-bottom: 40px;'>
  <h2 style='color: #0F172A; font-size: 22px; border-bottom: 2px solid #0F172A; padding-bottom: 8px; margin-bottom: 20px;'>
    2. 기저부하와 해수 냉각의 결합: 구글 핀란드 130억 유로 인프라 확장의 배후
  </h2>
  <p style='color: #334155; font-size: 15px; margin-bottom: 16px;'>
    구글이 핀란드 하미나(Hamina) 데이터센터를 중심으로 발표한 130억 유로(약 23조 원) 규모의 대규모 투자는 AI 데이터센터의 입지 선정이 철저하게 '에너지 공급망'과 '자연 냉각 자원'을 축으로 재편되고 있음을 입증합니다. 수천 메가와트(MW) 규모의 전력을 안정적으로 소비해야 하는 차세대 AI 클러스터는 전력망 안정성이 취약한 지역에서는 가동 자체가 불가능하기 때문입니다.
  </p>
  <p style='color: #334155; font-size: 15px; margin-bottom: 16px;'>
    핀란드를 포함한 북유럽 지역은 풍력과 수력, 원자력 등 무탄소 기저부하(Zero-Carbon Baseload) 전력망이 탄탄하게 조성되어 있어, 하이퍼스케일러들이 공언한 연중 상시 탄소중립(24/7 Carbon-Free Energy) 목표를 실현하기에 가장 이상적인 입지로 꼽힙니다. 특히 하미나 시설은 발트해의 차가운 해수를 활용한 직접 냉각(Direct Sea Water Cooling) 터널 시스템을 가동하여, 전력사용효율(PUE)을 업계 최저 수준으로 유지하고 있습니다.
  </p>
  <p style='color: #334155; font-size: 15px; margin-bottom: 16px;'>
    수냉식 랙과 칩 직접 냉각(Direct-to-Chip Liquid Cooling)이 필수화된 차세대 AI 서버 환경에서, 대규모 칠러(Chiller) 가동에 따른 추가 전력 손실을 줄이고 주변 수자원을 순환 냉각원으로 활용하는 인프라 설계는 연간 수백억 원의 운영 비용 절감과 직결됩니다. 구글의 이번 확장은 단순한 서버 증설을 넘어, 지역 난방 네트워크와 연계한 폐열 회수 시스템까지 통합하여 유럽연합(EU)의 강화된 에너지 효율 지침(EED)과 기업 지속가능성 보고 지침(CSRD) 규제에 선제적으로 부합하는 모델로 평가됩니다.
  </p>
</section>

<section style='margin-bottom: 40px;'>
  <h2 style='color: #0F172A; font-size: 22px; border-bottom: 2px solid #0F172A; padding-bottom: 8px; margin-bottom: 20px;'>
    3. 자본 투입과 인프라 현장의 간극: 구글·블랙스톤 6.7조 원 프로젝트 난항의 교훈
  </h2>
  <p style='color: #334155; font-size: 15px; margin-bottom: 16px;'>
    구글과 글로벌 사모펀드 운용사 블랙스톤이 공동 추진하던 6조 7,000억 원 규모의 AI 데이터센터 프로젝트가 장비 공급난과 인허가 규제로 인해 심각한 차질을 빚고 있다는 소식은 인프라 업계 전반에 중요한 경종을 울리고 있습니다. 수조 원에 달하는 막대한 파이낸싱이 성사되더라도, 물리적인 제조 및 인프라 조달 체계가 이를 뒷받침하지 못하면 프로젝트가 언제든 좌초될 수 있음을 보여주기 때문입니다.
  </p>
  <p style='color: #334155; font-size: 15px; margin-bottom: 16px;'>
    프로젝트 지연의 가장 직접적인 원인 중 하나는 초고압 대형 변압기(Large Power Transformer, LPT)와 배전반, 개폐기(Switchgear) 등 핵심 전력 기자재의 조달 지연입니다. 글로벌 전력망 인프라의 노후화 교체 수요와 AI 데이터센터 신설 수요가 동시에 몰리면서, 대형 변압기의 리드타임(발주부터 인도까지 걸리는 시간)은 기존 1~2년에서 최장 3~4년 이상으로 급증한 상태입니다.
  </p>
  <p style='color: #334155; font-size: 15px; margin-bottom: 16px;'>
    여기에 지자체의 환경영향평가 강화와 지역 주민들의 소음 및 고압 송전선로 설치 반대 등 사회적 수용성 저하가 인허가 일정을 장기화하고 있습니다. 데이터센터 개발사들은 오프밸런스(Off-Balance-Sheet) 구조를 활용해 부채를 분산하고 특수목적법인(SPC)을 통해 자금을 조달하더라도, 현장의 물리적 병목으로 완공 시점이 지연될 경우 금융 이자 비용 증가와 하이퍼스케일러와의 장기 임차 계약(PPA 및 리스 계약) 불이행 위험에 고스란히 노출되는 구조적 리스크를 안고 있습니다.
  </p>
  <blockquote style='background: #FFFBEB; border-left: 4px solid #F59E0B; margin: 20px 0; padding: 16px 20px; font-size: 14px; color: #78350F;'>
    <strong>인프라 리스크 시사점</strong>: 향후 데이터센터 확장 계획을 수립하는 클라우드 아키텍트와 인프라 리더들은 가속기 수급 계획뿐만 아니라 유틸리티 기업(한전 등 전력 공급사)과의 사전 송전망 연계 협의, 초고압 전력 기자재의 사전 구매 계약(Procurement Pre-ordering), 모듈러 배전 방식 검토를 사업 기획 초기 단계에 필수적으로 병행해야 합니다.
  </blockquote>
</section>

<section style='margin-bottom: 40px;'>
  <h2 style='color: #0F172A; font-size: 22px; border-bottom: 2px solid #0F172A; padding-bottom: 8px; margin-bottom: 20px;'>
    4. 소버린 AI 인프라 자본화와 규제 준수형 버티컬 엔터프라이즈 클라우드 확산
  </h2>
  <p style='color: #334155; font-size: 15px; margin-bottom: 16px;'>
    빅테크 중심의 전통적 퍼블릭 클라우드 체계 외에도, 지역별 데이터 주권과 국가 단위 전략 자산화를 목표로 하는 소버린 AI 인프라 구축 흐름이 뚜렷해지고 있습니다. 카타르 통신 대기업 오레두(Ooredoo)의 지원을 받는 잔코어(Zankore)가 엔비디아 AI 클라우드 플랫폼 구축을 위해 31억 달러(약 4조 1,000억 원) 규모의 대규모 파이낸싱을 확보한 사례가 대표적입니다. 이는 중동 및 신흥 시장에서 자체적인 AI 컴퓨팅 팩토리를 조성하여 미국 거대 플랫폼에 대한 종속을 줄이고 디지털 주권을 확보하려는 대규모 인프라 투자입니다.
  </p>
  <p style='color: #334155; font-size: 15px; margin-bottom: 16px;'>
    한편 국내 엔터프라이즈 환경에서는 데이터 주권과 엄격한 규제 컴플라이언스를 전제로 한 버티컬 도메인 특화 모델 개발이 본격화되고 있습니다. 43년간 국내 병·의원용 전자의무기록(EMR)과 의료 IT 시스템을 공급해 온 비트컴퓨터는 AWS와 손잡고 한국어 의료 데이터와 국내 임상 현장에 특화된 대규모 언어모델(LLM) 개발 및 클라우드 마이그레이션을 추진합니다.
  </p>
  <p style='color: #334155; font-size: 15px; margin-bottom: 16px;'>
    그동안 글로벌 선도 파운데이션 모델들은 한국 고유의 진료·처방 코드, 건강보험심사평가원(HIRA)의 복합 심사 기준, 보건복지부 고시 체계를 온전히 반영하지 못했습니다. 더욱이 환자의 민감한 개인 의료정보가 해외 리전으로 전송되는 데 따른 의료법 및 개인정보보호법 위반 우려는 의료 기관의 AI 도입을 가로막는 가장 큰 걸림돌이었습니다. 비트컴퓨터는 비식별화된 임상 데이터와 지침을 기반으로 특화 파운데이션 모델을 구축하고 이를 AWS의 국내 리전 내 격리된 보안 환경에서 학습·운영하는 아키텍처를 채택했습니다.
  </p>
  <p style='color: #334155; font-size: 15px; margin-bottom: 16px;'>
    이러한 규제 산업군의 클라우드 전환 가속화는 인프라 관리 및 클라우드 관리 서비스 기업(MSP)의 전문 역량 강화를 요구하고 있습니다. 최근 메가존클라우드가 AWS 보안 컴피턴시(Security Competency)를 획득한 것은 엔터프라이즈가 금융, 의료, 공공 등 컴플라이언스 준수 요건이 엄격한 핵심 시스템을 안심하고 클라우드로 이관하기 위한 보안 아키텍처 거버넌스와 클라우드 보안 형상 관리(CSPM) 체계가 인프라 도입의 핵심 전제 조건으로 자리 잡았음을 방증합니다.
  </p>
</section>

<section style='background: #F1F5F9; border-radius: 12px; padding: 24px; margin-bottom: 40px;'>
  <h2 style='color: #0F172A; font-size: 18px; margin-top: 0; margin-bottom: 16px;'>
    💡 종합 제언: 인프라 아키텍트와 기술 의사결정권자를 위한 전략 가이드
  </h2>
  <ol style='margin: 0; padding-left: 20px; color: #334155; font-size: 15px; line-height: 1.8;'>
    <li style='margin-bottom: 10px;'>
      <strong>추론 워크로드 중심의 이기종 칩셋 아키텍처 준비</strong>: 향후 인프라 운영 비용을 최적화하기 위해 엔비디아 단일 플랫폼에 고착된 파이프라인에서 탈피하고, AWS 자체 가속 칩 및 퀄컴 등 저전력 NPU를 지원하는 컨테이너 오케스트레이션과 컴파일러(예: AWS Neuron, TVM) 적합성 검증을 사전에 진행해야 합니다.
    </li>
    <li style='margin-bottom: 10px;'>
      <strong>데이터센터 용량 산정 시 물리적 유틸리티 리드타임 통합</strong>: 단순 상면 확보나 가상 서버 프로비저닝 계획을 넘어, 고전압 배전 장비와 현지 전력망 인입 용량의 물리적 리드타임을 프로젝트 타임라인에 반영하는 '하드웨어-설비-망 연계 통합 거버넌스'를 수립해야 합니다.
    </li>
    <li>
      <strong>민감 데이터 처리를 위한 리전 내 보안 컴플라이언스 파이프라인 표준화</strong>: 의료, 금융 등 규제 산업 분야에서는 비식별화 파이프라인, 전송 및 저장 데이터 암호화 키 관리(KMS), 컴피턴시 기반 검증 프레임워크를 조기에 결합하여 데이터 국외 유출 리스크를 원천 차단하는 클라우드 아키텍처를 설계해야 합니다.
    </li>
  </ol>
</section>

<footer style='border-top: 1px solid #E2E8F0; padding-top: 24px;'>
  <h3 style='color: #475569; font-size: 16px; margin-top: 0; margin-bottom: 12px;'>🔗 오늘의 주요 큐레이션 링크</h3>
  <ul style='list-style: none; padding-left: 0; margin: 0; font-size: 14px;'>
    <li style='margin-bottom: 8px;'>
      <span style='color: #64748B;'>[전자신문]</span> 
      <a href='https://news.google.com/rss/articles/CBMiTkFVX3lxTFBfR2IzQXp0US1ZVERWOVBvYWRwWlZMaFliMlJHV3RrYkJmMTZuUUFQaW5PNTZheTlSMHhDRTZWNFhIYkRneTZvVXJ2WExEQQ?oc=5' target='_blank' style='color: #2563EB; text-decoration: none;'>퀄컴, 아마존과 10년간 80조원 AI 데이터센터 칩 공급 협약</a>
    </li>
    <li style='margin-bottom: 8px;'>
      <span style='color: #64748B;'>[TechRadar]</span> 
      <a href='https://news.google.com/rss/articles/CBMirgFBVV95cUxQdzRSRjByRHQ3cEdQaFN4UHJaTHV4b1hWRXpCLUcxd2swbE9GcU5qcWtYSEVRaDBvU0NlU2hfcGJEZmFIUVIxVGJtVlRMb0MxQXBqaE41cjQwNF9IOFRKSVBPZS0zMmhzR3k5T0dfbUNyVktPbXdfZEJ5YWNLVGNNd2RteGJtWm1CaDZ0a3hISmxtVktMem5Ka1pyN1dZSnAxc0lEV2tycHMybzhvTkE?oc=5' target='_blank' style='color: #2563EB; text-decoration: none;'>Qualcomm signs $4 billion multi-generational data center and AI deal with AWS</a>
    </li>
    <li style='margin-bottom: 8px;'>
      <span style='color: #64748B;'>[Google Blog / 한국경제]</span> 
      <a href='https://news.google.com/rss/articles/CBMirwFBVV95cUxOWHFqVUxBYVJnaWdudjhTVVZoakRwSUZqbHVKcWFxNlNRT2JNTDdwQk0tT3ppYmxNczFwWXluNDhoVHh4UUR1TlZHSlpWaGpBdDZwMTZsdldCMXVkd0t3eXJWVEl4RmpUVGJ4aHBrT1RpZEt2Umw3dDBXTVQ5VDM2a3c0a1l6QlZVRmxuUzZqLUtaVlVNYUYxanAyZDVlVVpIdUFXbzFuYXhScmNleE9R?oc=5' target='_blank' style='color: #2563EB; text-decoration: none;'>Google deepens commitment to Finland with €13B investment in AI infrastructure</a>
    </li>
    <li style='margin-bottom: 8px;'>
      <span style='color: #64748B;'>[중앙일보]</span> 
      <a href='https://news.google.com/rss/articles/CBMiW0FVX3lxTE5VbEU5eWszWjVraGtTdFJ5d25kR0UyLWpsYWFNRjNzVjJkOVI4VjB5OG1QbXR1eWJ4R0hfYzZqS3p2b0Y5bkJXOEFKOG1JRWcyUEJsNEYtN1BSa1E?oc=5' target='_blank' style='color: #2563EB; text-decoration: none;'>구글·블랙스톤 6.7조 AI 프로젝트 ‘삐걱’…데이터센터 장비난·규제에 발목</a>
    </li>
    <li style='margin-bottom: 8px;'>
      <span style='color: #64748B;'>[전자신문]</span> 
      <a href='https://www.etnews.com/20260909000066' target='_blank' style='color: #2563EB; text-decoration: none;'>비트컴퓨터, AWS 손잡고 '韓 의료 특화 LLM' 개발 나선다</a>
    </li>
    <li style='margin-bottom: 8px;'>
      <span style='color: #64748B;'>[조선비즈]</span> 
      <a href='https://news.google.com/rss/articles/CBMilgFBVV95cUxONndtOHRxcmpBSXd3TTNBbzNPVE5LRmlMLWs4TEJTakxXei1lcllCR2xvZm5DM0JwVFlWRlVfWC1qV0RVN05CbkF2RU03RlZBVkF5WEVfRk9RbTJkRnNXU1JEM3duczI1ckFCOVIyTzgtSTU1cElzZUhoSFFtUWJFdEJtcUhseWR5MG8zeWhWanM5bUF0Y1HSAZYBQVVfeXFMTjZ3bTh0cXJqQUl3d00zQW8zT1ROS0ZpTC1rOExCU2pMV3otZXJZQkdsb2ZuQzNCcFRZVkZVX1gtaldEVTdOQm5BdkVNN0ZWQVZBeVhFX0ZPUW0yZEZzV1NSRDN3bnMyNXJBQjlSMk84LUk1NXBJc2VIaEhRbVFiRXRCbXFIbHlkeTBvM3loVmpzOW1BdGNR?oc=5' target='_blank' style='color: #2563EB; text-decoration: none;'>메가존클라우드, AWS 보안 컴피턴시 획득</a>
    </li>
    <li>
      <span style='color: #64748B;'>[MarketScreener]</span> 
      <a href='https://news.google.com/rss/articles/CBMizwFBVV95cUxOSHMtZWp0cU1JUVM0YUgwelNnc3pqTlJycnFaYVNxTV9GZXI4eWhPUkwweWdhS1M5UndqSVlPM2ZRcm5IOXhIWUxGeENIem93aDhDZ3huZmxnZ0dheGx2VTB3XzJ5ZGNaQmo3NGhHNVRueGJCNjY1RlZyRVZmeXU3UE5BdWNicHRwY1VEaW5BOUpPckp2alQ2Z2F2Vy0zeU5vbUpzQndDZkZzY19jTGVTUGFqZXdSV01WWXV4QVFlc3plRU9WYkViRjc0OTF6Rkk?oc=5' target='_blank' style='color: #2563EB; text-decoration: none;'>Ooredoo-backed Zankore secures $3.1 billion financing for Nvidia AI cloud platform</a>
    </li>
  </ul>
</footer>

</div>